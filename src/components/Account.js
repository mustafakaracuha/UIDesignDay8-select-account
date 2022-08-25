import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faTrashCan,
  faPen,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import AddAccount from "./AddAccount";
import { userDelete } from "../stores/features/account";

export default function Account() {
  const [openDialog, setOpenDialog] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isEdit, setEdit] = useState(true);
  const [userId, setUserId] = useState("");

  const open = Boolean(anchorEl);

  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const { userData } = useSelector((state) => state.account);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const selectedUser = (user) => {
    if (anchorEl === null) {
      let selectedUser = user.id;
      setUserId(selectedUser);
      console.log(userId);
    } else if (anchorEl !== null) {
      setAnchorEl(null);
    }
  };

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const editAccount = (user) => {
    setEdit(!isEdit);
  };

  const deleteAccount = (user) => {
    dispatch(userDelete(userId));
    setAnchorEl(null);
  };

  return (
    <>
      <div className="box">
        <h1 className="title">Select your profile</h1>
        <p>
          Logged in users can view full business profiles and can save contact
          details.
        </p>
        <div className="main">
          {userData.map((user, index) => (
            <div key={user.id} className="user">
              <div
                title={user.name}
                className="userMain"
                onClick={() => selectedUser(user)}
              >
                <div className="avatar">
                  <img width={80} src={user.img} alt="" />
                </div>
                <div>
                  {!isEdit ? (
                    <input ref={inputRef} defaultValue={user.name}></input>
                  ) : (
                    <p>{user.name}</p>
                  )}
                </div>
                <button onClick={(event) => handleClick(event)}>
                  <FontAwesomeIcon
                    style={{ fontSize: "22px", color: "#5a7d92" }}
                    icon={faEllipsis}
                  />
                </button>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                  onClose={() => handleClose()}
                >
                  <MenuItem onClick={() => editAccount(user)}>
                    <FontAwesomeIcon
                      style={{
                        fontSize: "17px",
                        color: "#5a7d92",
                        marginRight: "10px",
                      }}
                      icon={faPen}
                    />
                    Edit
                  </MenuItem>
                  <MenuItem key={user.id} onClick={() => deleteAccount(user)}>
                    <FontAwesomeIcon
                      style={{
                        fontSize: "17px",
                        color: "#5a7d92",
                        marginRight: "10px",
                      }}
                      icon={faTrashCan}
                    />
                    Delete{" "}
                  </MenuItem>
                </Menu>
              </div>
            </div>
          ))}
          <div
            title="Add Account"
            className="addAccount"
            onClick={handleClickOpenDialog}
          >
            <div>
              <FontAwesomeIcon
                style={{
                  fontSize: "40px",
                  color: "#C3D3EC",
                }}
                icon={faPlus}
              />
            </div>
          </div>
          <AddAccount
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
          ></AddAccount>
        </div>
      </div>
    </>
  );
}

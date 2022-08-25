import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

import { userAdd } from "../stores/features/account";

export default function (props) {
  const [image, setImage] = useState(null);
  const [accountName, setAccountName] = useState("");

  const dispatch = useDispatch();

  const handleCloseDialog = (value) => {
    props.setOpenDialog(false);
  };

  const addAccount = () => {
    if (image && accountName) {
      const account = {
        id: nanoid(),
        img: image,
        name: accountName,
      };
      dispatch(userAdd(account));
      setImage(null);
      setAccountName("");
      toast.success('Profile added 🥳')
      props.setOpenDialog(false);
    } else if (!image && !accountName) {
      toast.warn("Please add image and name 😒");
    } else if (!image) {
      toast.warn("Please add image 😖");
    } else if (!accountName) {
      toast.warn("Please add name 😫");
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  return (
    <Dialog onClose={handleCloseDialog} open={props.openDialog}>
      <DialogTitle center>Add Account</DialogTitle>
      <div className="avatarDialog">
        {image ? (
          <img width={120} src={image} alt="" />
        ) : (
          <FontAwesomeIcon
            style={{
              fontSize: "40px",
              color: "#C3D3EC",
            }}
            icon={faUser}
          />
        )}
      </div>
      <input type="file" onChange={onImageChange} className="filetype" />
      <input
        className="addAccountName"
        name=""
        placeholder="Account Name"
        value={accountName}
        onChange={(e) => setAccountName(e.target.value)}
      />
      <button className="addBtn" onClick={addAccount}>
        {" "}
        Add Account
      </button>
    </Dialog>
  );
}

import { Modal } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../actions/uploadAction";


function ProfileModal({ modalOpened, setModalOpened, data }) {
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let UserData = formData;
    if (profileImage) {
      const data = new FormData();
      const fileName = Date.now() + profileImage.name;
      data.append("name", fileName);
      data.append("file", profileImage);
      UserData.profilePicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }
    if (coverImage) {
      const data = new FormData();
      const fileName = Date.now() + coverImage.name;
      data.append("name", fileName);
      data.append("file", coverImage);
      UserData.coverPicture = fileName;
      try {
        dispatch(uploadImage(data));
      } catch (error) {
        console.log(error);
      }
    }

    dispatch(updateUser(param.id, UserData))
    setModalOpened(false)
  };

  const onImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      e.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  };

  return (
    <>
      <Modal
        overlayOpacity={0.55}
        overlayBlur={3}
        size="45%"
        centered
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        <form className="infoForm">
          <h3>Your info</h3>

          <div>
            <input
              type="text"
              className="infoInput"
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={formData.firstName}
            />

            <input
              type="text"
              className="infoInput"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={formData.lastName}
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="worksAt"
              placeholder="Works at"
              onChange={handleChange}
              value={formData.worksAt}
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="livesIn"
              placeholder="LIves in"
              onChange={handleChange}
              value={formData.livesIn}
            />

            <input
              type="text"
              className="infoInput"
              name="country"
              placeholder="Country"
              onChange={handleChange}
              value={formData.country}
            />
          </div>

          <div>
            <input
              type="text"
              className="infoInput"
              name="relationship"
              placeholder="RelationShip Status"
              onChange={handleChange}
              value={formData.relationship}
            />
          </div>

          <div>
            Profile Image
            <input type="file" name="profileImage" onChange={onImageChange} />
            Cover Image
            <input type="file" name="coverImage" onChange={onImageChange} />
          </div>

          <button className="button infoButton" onClick={handleSubmit}>
            Update
          </button>
        </form>
      </Modal>
    </>
  );
}

export default ProfileModal;

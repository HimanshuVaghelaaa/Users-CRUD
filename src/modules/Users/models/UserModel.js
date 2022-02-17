import BaseModel from "../../../core/components/input-widget/BaseModel";

export default class UserModel extends BaseModel {
  id = null;
  name = null;
  surname = null;
  email = null;
  password = null;
  username = null;
  phone = null;
  phone_country_code = null;
  image = null;
  imageBase64 = null;

  rules = {
    name: "required",
    surname: "required",
    email: [{ rule: "required" }, { rule: "email" }],
    password: "required",
    username: "required",
    phone: "required",
    phone_country_code: "required",
  };

  attributeLabels = {
    name: "Name",
    surname: "Surname",
    email: "Email Address",
    password: "Password",
    username: "Username",
    phone: "Phone Number",
    phone_country_code: "Phone Country Code",
    image: "Image",
  };

  constructor(data) {
    super();
    Object.assign(this, { ...data });
  }
}

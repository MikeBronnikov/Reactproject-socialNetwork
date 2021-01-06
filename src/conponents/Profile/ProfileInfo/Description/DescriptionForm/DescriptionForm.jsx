import { useFormik } from "formik";
import React, { useState } from "react";
import styles from "./DescriptionForm.module.css";

const DescriptionForm = (props) => {
  const discriptionArray = [
    { en: "lookingForAJob", ru: "В поиске работы", type: "checkbox" },
    { en: "LookingForAJobDescription", ru: "Описание работы", type: "text" },
    { en: 'FullName', ru: "Полное имя", type: "text" },
    { en: "AboutMe", ru: "Расскажите о себе", type: "text" },
  ];
  const contactArray = [
    { en: "Github", name: "contacts.github" },
    { en: "Github", name: "contacts.github" },
    {},
  ];
  let formik = useFormik({
    initialValues: {
      lookingForAJob: props.profile.lookingForAJob,
      LookingForAJobDescription: props.profile.lookingForAJobDescription,
      FullName: props.profile.fullName,
      AboutMe: props.profile.aboutMe,
    },
    onSubmit: (values) => {
      props.setProfileInfo(values);
      props.setdiscriptionEditMode(false);
    },
    validate: (values) => {
      let errors = {};
      if (!values.FullName) {
        errors.FullName = "Это поле должно быть заполнено";
      }
      if (!values.LookingForAJobDescription) {
        errors.LookingForAJobDescription = "Это поле должно быть заполнено";
      }
      if (!values.FullName) {
        errors.FullName = "Это поле должно быть заполнено";
      }
      console.log(errors);
      return errors;
    },
  });
  return (
    <form >
      {discriptionArray.map((item) => {
         
          return(
        <div className={styles.item}>
          <label htmlFor={item.en}>{item.ru}</label>{" "}
          <input id={item.en} onChange={formik.handleChange} name={item.en} 
          value={formik.values[item.en]} type={item.type}/>
          <br/>
         {formik.errors[item.en] && <span className={styles.error}>{formik.errors[item.en]}</span>}
        </div>
      )})}

      <div className={styles.item}>
        <label htmlFor="Github">Github</label>
        <input
          id="Github"
          onChange={formik.handleChange}
          name="contacts.github"
          value={formik.values.github}
          type="text"
        />
      </div>
      <div className={styles.item}>
        <label htmlFor="vk">vk</label>
        <input
          id="vk"
          onChange={formik.handleChange}
          name="contacts.vk"
          value={formik.values.vk}
          type="text"
        />
      </div>
      <button onClick={formik.handleSubmit}>Сохранить изменения профиля</button>
    </form>
  );
};

export default DescriptionForm;

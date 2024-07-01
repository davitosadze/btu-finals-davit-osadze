import React from "react";
import { Card, Form, Row, Col, Button, Spinner, Alert } from "react-bootstrap";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import useFetch from "../hooks/useFetch";
import * as yup from "yup";
import { Formik } from "formik";
import { useDarkMode } from "../context/DarkModeContext";

function Home() {
  const { t } = useTranslation();
  const { isDarkMode } = useDarkMode();
  const { makeModels, loading, error, selectedMake, handleMakeChange } =
    useFetch("bmw");

  const schema = yup.object().shape({
    name: yup.string().required(t("nameRequired")),
    email: yup.string().email(t("invalidEmail")).required(t("emailRequired")),
    message: yup.string().required(t("messageRequired")),
  });

  const handleSubmit = async (values) => {
    alert("Check Console Log");
    console.log(values);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className={isDarkMode ? "dark-mode" : "light-mode"}>
      <div className="mt-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <section className="mt-5">
            <h2 className="text-center mb-4">{t("modelsByMake")}</h2>

            <Form.Group controlId="makeFilter" className="text-center">
              <Form.Control
                as="select"
                onChange={(e) => handleMakeChange(e.target.value)}
                value={selectedMake}
                className="mt-2 w-50 d-inline-block"
              >
                <option value="bmw">BMW</option>
                <option value="acura">Acura</option>
                <option value="nissan">Nissan</option>
                <option value="ford">Ford</option>
                <option value="mercedes-benz">Mercedes-Benz</option>
                <option value="dodge">Dodge</option>
                <option value="lexus">Lexus</option>
                <option value="audi">Audi</option>
                <option value="bentley">Bentley</option>
                <option value="cadillac">Cadillac</option>
              </Form.Control>
            </Form.Group>

            {loading && (
              <div className="text-center mt-4">
                <Spinner animation="border" />
              </div>
            )}

            {error && (
              <Alert variant="danger" className="text-center mt-4">
                {t("errorLoadingModels")}: {error.message}
              </Alert>
            )}

            {!loading && !error && (
              <Row className="mt-4">
                {makeModels.map((model) => (
                  <Col key={model.model_id} sm={12} md={4} className="mb-3">
                    <motion.div whileHover={{ scale: 1.1 }}>
                      <Card>
                        <Card.Body>
                          <Card.Title>{model.model_name}</Card.Title>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            )}
          </section>

          <section className="mt-5">
            <h2 className="text-center mb-4">{t("contactUs")}</h2>
            <p className="text-center">{t("contactMessage")}</p>
            <Formik
              initialValues={{ name: "", email: "", message: "" }}
              validationSchema={schema}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange, handleSubmit, errors, touched }) => (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={formVariants}
                  transition={{ duration: 0.5 }}
                >
                  <Form onSubmit={handleSubmit} className="w-50 mx-auto">
                    <Form.Group controlId="formBasicName">
                      <Form.Label>{t("yourName")}</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder={t("enterName")}
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        isInvalid={touched.name && !!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>{t("emailAddress")}</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder={t("enterEmail")}
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        isInvalid={touched.email && !!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formBasicMessage">
                      <Form.Label>{t("message")}</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder={t("enterMessage")}
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        isInvalid={touched.message && !!errors.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className="w-100 mt-3"
                    >
                      {t("submit")}
                    </Button>
                  </Form>
                </motion.div>
              )}
            </Formik>
          </section>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;

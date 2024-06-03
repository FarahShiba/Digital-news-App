import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { Container, Row, Col, Form } from "react-bootstrap";
import styles from "../../postitems/pages.module.css";

const EditPostItem = () => {
  const router = useRouter();
  const { id } = router.query;

  const initialState = {
    title: "",
    img: "",
    category: "",
    author: "",
    description: "",
    validate: "",
  };

  const [text, setText] = useState(initialState);

  // const getSinglePostData = () => {
  //   console.log(router.query);
  //   fetch(`/api/postitems/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => setText(data.data))
  //     .catch((e) => console.log(e.message));
  // };

  const getSinglePostData = useCallback(() => {
    fetch(`/api/postitems/${id}`)
      .then((res) => res.json())
      .then((data) => setText(data.data))
      .catch((e) => console.log(e.message));
  }, [id]);

  useEffect(() => {
    if (id) {
      getSinglePostData();
    }
  }, [id, getSinglePostData]);

  const handleTextChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
      validate: "",
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { title, img, category, author, description } = text;
    if (!title || !img || !category || !author || !description) {
      setText({
        ...text,
        validate: "Please fill all the fields",
      });
    } else {
      try {
        const response = await fetch(`/api/postitems/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(text),
        });
        if (response.ok) {
          setText({ ...text, validate: "Post updated successfully" });
        } else {
          setText({ ...text, validate: "Something went wrong" });
        }
      } catch (error) {
        setText({ ...text, validate: "Something went wrong" });
      }
    }
  };

  return (
    <main id="main">
      <section className={styles.createPostContent}>
        <Container>
          <Row className="d-flex justify-content-center">
            <Col lg={11}>
              <Row className="d-flex justify-content-center mt-5">
                <Col lg={11}>
                  <Row>
                    <Col lg={11} className="text-center mb-5">
                      <h1 className={styles.pageTitle}> Edit Post</h1>
                    </Col>
                  </Row>
                  <Form onSubmit={handleFormSubmit}>
                    <Row>
                      <Col lg={6} mb={3}>
                        <Form.Label>
                          Title
                          <Form.Control
                            type="text"
                            name="title"
                            value={text.title}
                            onChange={handleTextChange}
                            className={styles.formControl}
                            placeholder="Enter Title"
                          />
                        </Form.Label>
                      </Col>
                      <Col lg={6} mb={3}>
                        <Form.Label>
                          Image URL
                          <Form.Control
                            type="text"
                            name="img"
                            value={text.img}
                            onChange={handleTextChange}
                            className={styles.formControl}
                            placeholder="Enter Image URL"
                          />
                        </Form.Label>
                      </Col>
                      <Col lg={6} mb={3}>
                        <Form.Label>
                          Category
                          <Form.Control
                            type="text"
                            name="category"
                            value={text.category}
                            onChange={handleTextChange}
                            className={styles.formControl}
                            placeholder="Enter Post Category"
                          />
                        </Form.Label>
                      </Col>
                      <Col lg={6} mb={3}>
                        <Form.Label>
                          Author
                          <Form.Control
                            type="text"
                            name="author"
                            value={text.author}
                            onChange={handleTextChange}
                            className={styles.formControl}
                            placeholder="Enter Author Name"
                          />
                        </Form.Label>
                      </Col>
                      <Col lg={12} mb={3}>
                        <Form.Label>
                          Description
                          <Form.Control
                            as={"textarea"}
                            rows={10}
                            cols={150}
                            name="description"
                            value={text.description}
                            onChange={handleTextChange}
                            className="formControl"
                            placeholder="Enter Description"
                          />
                        </Form.Label>
                      </Col>
                      <div className="mb-3">
                        {text.validate == "loading" && (
                          <div className={styles.loading}>Updating Post</div>
                        )}
                        {text.validate == "incomplete" && (
                          <div className={styles.errorMessage}>
                            Please fill in all above details
                          </div>
                        )}
                        {text.validate == "success" && (
                          <div className={styles.sentMessage}>
                            Your news updated successfully. Thankyou!
                          </div>
                        )}
                        {text.validate == "error" && (
                          <div className={styles.errorMessage}>
                            Server error
                          </div>
                        )}
                      </div>
                      <Col lg={12} d-flex justify-content-center>
                        <Form.Control
                          type="submit"
                          value="Submit"
                          className="btn btn-primary"
                        />
                      </Col>
                    </Row>
                  </Form>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
export default EditPostItem;

import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import PostItemOne from "@/components/layout/PostItemOne";
import { PreLoader } from "@/components/layout/preLoader/PreLoader";
import { Container, Row, Col } from "react-bootstrap";
import { PageTitle } from "@/components/layout/pageTitle/PageTitle";

const Posts = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const getItemsData = () => {
    fetch(`/api/postitems`)
      .then((res) => res.json())
      .then((data) => {
        setItems(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch items:", error.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    getItemsData();
  }, []);

  const handlePostClick = (id) => {
    router.push(`/postitems/${id}`);
  };

  return (
    <main id="main">
      <section id="posts" className="posts">
        <Container>
          <Row>
            <PageTitle title="Post Items List" />
            {loading ? (
              <PreLoader />
            ) : items.length > 0 ? (
              items.map((item) => (
                <Col lg={4} className="g-4" key={item._id}>
                  <div onClick={() => handlePostClick(item._id)}>
                    <PostItemOne item={item} />
                  </div>
                </Col>
              ))
            ) : (
              <p>No posts available</p>
            )}
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Posts;

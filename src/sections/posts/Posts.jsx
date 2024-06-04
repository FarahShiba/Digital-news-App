import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import PostItemOne from "@/components/layout/PostItemOne";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import styles from "./posts.module.css";
import TrendingPost from "@/components/layout/trenPost/TrendingPost";
import { PreLoader } from "@/components/layout/preLoader/PreLoader";

export default function Posts() {
  const router = useRouter();
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState();
  const [loading, setLoading] = useState(true);

  //Fetch all items
  const fetchItems = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/postitems`
      );
      const data = await response.json();
      const filteredData = data.data.filter(
        (item) => item.img !== "path/to/girls-picture.jpg"
      );
      setItems(filteredData);
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch items:", error.message);
      setLoading(false);
    }
  };

  const getSinglePostData = async (id) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/postitems/${id}`
      );
      const data = await response.json();
      setSelectedItem(data.data);
    } catch (error) {
      console.error("Failed to fetch item:", error.message);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handlePostClick = (id) => {
    router.push(`/postitems/${id}`);
  };

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      getSinglePostData(id);
    }
  }, [router.query]);

  const combinedItems = items.filter((item) => item.top || item.trending);

  return (
    <section id="posts" className={styles.posts}>
      <Container data-aos="fade-up">
        <div className={`${styles.containerCustom}`}>
          <Col lg={5}>
            <Row className="g-8">
              <Col lg={11}>
                {loading ? (
                  <PreLoader />
                ) : (
                  items.length > 0 && (
                    <div onClick={() => handlePostClick(items[0]._id)}>
                      <PostItemOne item={items[0]} showDetail />
                    </div>
                  )
                )}
              </Col>
            </Row>
          </Col>
          <Col lg={4}>
            {loading ? (
              <PreLoader />
            ) : combinedItems.length > 0 ? (
              <Row className="g-1">
                {combinedItems.slice(1, 4).map((item) => (
                  <Col
                    key={item._id}
                    lg={11}
                    className={styles.borderStart}
                    onClick={() => handlePostClick(item._id)}
                  >
                    <PostItemOne item={item} />
                  </Col>
                ))}
              </Row>
            ) : (
              <p>No top or trending posts available</p>
            )}
          </Col>
          <Col lg={4}>
            {loading ? (
              <PreLoader />
            ) : combinedItems.length > 0 ? (
              <Row className="g-1">
                {combinedItems.slice(4, 6).map((item) => (
                  <Col
                    key={item._id}
                    lg={11}
                    className={styles.borderStart}
                    onClick={() => handlePostClick(item._id)}
                  >
                    <PostItemOne item={item} />
                  </Col>
                ))}
              </Row>
            ) : (
              <p>No top or trending posts available</p>
            )}
          </Col>
          <Col lg={4} className={`${styles.containTrending} g-5`}>
            <div className={styles.trending}>
              <h3>Trending</h3>
              {loading ? (
                <PreLoader />
              ) : (
                <ListGroup as="ul" className={styles.trendingPost}>
                  {items
                    .filter((item) => item.trending)
                    .map((item, index) => (
                      <TrendingPost key={item._id} item={item} index={index} />
                    ))}
                </ListGroup>
              )}
            </div>
          </Col>
        </div>
        {selectedItem && (
          <div>
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.description}</p>
            <p>
              <img src={selectedItem.img} alt={selectedItem.title} />
            </p>
            <p>Category: {selectedItem.category}</p>
            <p>Author: {selectedItem.author}</p>
            <p>Date: {new Date(selectedItem.date).toLocaleDateString()}</p>
          </div>
        )}
      </Container>
    </section>
  );
}

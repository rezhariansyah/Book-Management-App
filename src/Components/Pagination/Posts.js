import React from 'react';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <div key={post.id_book} className="col-md-2 mb-5 mr-5">
            <div
              className="card text-white"
              style={{
                width: "10rem",
                borderColor: "white",
                backgroundColor: "#E1067B"
              }}
            >
              <img
                src={post.img}
                className="image card-img-top cardHome img-fluid"
                alt="..."
              />
              {post.status ? (
                <h6 style={{ display: "inline" }}>
                  <span
                    style={{ padding: "4px" }}
                    className="badge status badge-success"
                  >
                    &nbsp;Available&nbsp;
                  </span>
                </h6>
              ) : (
                <h6 style={{ display: "inline" }}>
                  <span
                    style={{ padding: "4px" }}
                    className="badge status badge-danger"
                  >
                    &nbsp;Borrowed&nbsp;
                  </span>
                </h6>
              )}

              <div className="middle">
              <div className="text">
                    <input
                      type="button"
                      className="btn btn-outline-success btn-sm"
                      value="Detail"
                    />
                  </div>
                {/* <BorrowModal book={post} />
                <Link to={"/bookDetail/" + post.id_book}>
                  
                </Link> */}
              </div>
              <div className="card-body">
                <h5 className="card-text hiddenTitle">{post.title}</h5>
                <p className="hidden" style={{ fontSize: 12, color: "white" }}>
                  {post.description}
                </p>
              </div>
            </div>
          </div>
      ))}
    </ul>
  );
};

export default Posts;

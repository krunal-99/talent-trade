import React from "react";
import "./Gig.css";
import Slider from "../../components/Slider/Slider";
const Gig = () => {
  return (
    <div className="gig">
      <div className="gig_container">
        <div className="gig_left">
          <h1>Gig Title</h1>
          <div className="user_profile">
            <img src="/images/man.png" className="profile_picture" />
            <span>Krunal Pokar</span>
            <div className="gig_stars">
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider className="slider" />
          <h2>About This Gig</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            fugiat iure illo quas sunt aperiam minus at unde aliquam, tenetur
            iusto repudiandae voluptatum? Totam cum iure incidunt perspiciatis
            repellendus eveniet atque quaerat. Officiis possimus amet molestiae
            aliquam illo alias! Neque placeat repellat laborum laudantium error
            perspiciatis quisquam rem. Perferendis, quas, est exercitationem,
            distinctio inventore fugit corporis id obcaecati ab minus eius?
            Atque nam recusandae perspiciatis, doloribus inventore iste commodi
            qui tempora nostrum nisi minus quasi nemo quae, tenetur officiis in
            odit, ipsum debitis illo magnam? Quidem reprehenderit expedita
            consequuntur, earum tempore voluptatibus consectetur eveniet, hic
            rerum amet, quam et dolore.
          </p>
          <div className="gig_seller">
            <h2>About The Seller</h2>
            <div className="user_seller">
              <img src="/images/man.png" alt="" />
              <div className="seller_info">
                <span>Krunal Pokar</span>
                <div className="gig_stars">
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="box_items">
                <div className="box_item">
                  <span className="title">From</span>
                  <span className="desc">India</span>
                </div>
                <div className="box_item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2024</span>
                </div>
                <div className="box_item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="box_item">
                  <span className="title">Last Delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="box_item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Nostrum deleniti sint expedita architecto sunt, quasi quod quo
                non eligendi sed nemo quisquam voluptates quae dolorem, commodi
                enim, explicabo amet ea maiores eveniet rem alias harum
                accusantium quibusdam. Tempore debitis eius dignissimos nostrum
                quo doloribus perspiciatis rem in! Corrupti, natus consequuntur.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="review_user">
              <img src="/images/man.png" alt="" />
              <div className="review_info">
                <span>Krunal Pokar</span>
                <div className="review_country">
                  <img
                    src="https://wallpaperaccess.com/full/2027791.png"
                    alt=""
                  />
                  <span>India</span>
                </div>
              </div>
            </div>
            <div className="gig_stars">
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <span>5</span>
            </div>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
              explicabo quam sit voluptatem vero eos possimus mollitia
              asperiores. Ut molestiae repudiandae veritatis praesentium rerum
              fugiat, in cum earum quis tempore minima nostrum repellat
              exercitationem accusamus quisquam deserunt quae amet nihil
              accusantium maxime? Omnis eos, illum id soluta quo nulla ratione
              eum voluptate facilis. Maxime, nihil incidunt odio quis magnam
              animi similique nostrum laborum quia rem vel omnis! Tenetur
              sapiente veritatis consequuntur recusandae libero aliquid
              accusamus?
            </p>
            <div className="helpful">
              <span>Helpful?</span>
              <img src="/images/like.png" alt="" />
              <span>Yes</span>
              <img src="/images/dislike.png" alt="" />
              <span>No</span>
            </div>
          </div>
        </div>
        <div className="gig_right">
          <div className="gig_price">
            <h3>1 AI Generated Image</h3>
            <h2>Rs. 10000</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me.
          </p>
          <div className="details">
            <div className="details_item">
              <img src="/images/clock.png" alt="" />
              <span>2 days Delivery</span>
            </div>
            <div className="details_item">
              <img src="/images/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="details_features">
            <div className="feature_item">
              <img src="/images/greencheck.png" alt="" />
              <span>Prompt Writing</span>
            </div>
            <div className="feature_item">
              <img src="/images/greencheck.png" alt="" />
              <span>Artwork Delivery</span>
            </div>
            <div className="feature_item">
              <img src="/images/greencheck.png" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="feature_item">
              <img src="/images/greencheck.png" alt="" />
              <span>Additional Design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};
export default Gig;

import { faBars } from "@fortawesome/free-solid-svg-icons";

const HomeIndex = () => {
  return (
    <>
    <div className="right_site_main tab-content" id="v-pills-tabContent">
      <div className="frontpage_right_site frontpage_right_site_top">
       

          <div className="right_site_title_text">
            <h2>THE GEMZSTONE PROJECT</h2>
            <p>
              The best self mining, zero staking requirement contract and its a
              project with a usecase for every coin and token. Making use of
              permissionless protocols and tested open source codes to create a
              unique product.
            </p>
          </div>
          <div className="right_site_title_contents">
            <div className="right_site_title_contents_boxs_all">
              <ul>
                <li>Max supply</li>
                <li>Wallet Balance</li>
                <li>All Pool Bal/Unmined Bal</li>
              </ul>
              <ul>
                <li>1500000 GEMZS</li>
                <li>250 GEMZS</li>
                <li>5500/950000 GEMZS</li>
              </ul>
              <ul>
                <li>Cir supply</li>
                <li>Total Miners</li>
                <li>Emission per Day</li>
              </ul>
              <ul>
                <li>550000 GEMZS</li>
                <li>350 Miners</li>
                <li>700 GEMZS</li>
              </ul>
            </div>
            <div className="right_site_title_contents_single">
              <p>GEMZS Price: $2.45</p>
            </div>
            <marquee behavior="scroll" direction="left" id="mymarquee">
              <p>
                <span style={{ color: "rgb(85, 57, 130)" }}>
                  <a
                    href="https://github.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Need Ads?
                  </a>
                </span>
                <span style={{ color: "rgb(184, 49, 47)" }}>&nbsp;</span>
                <span style={{ color: "rgb(97, 189, 109)" }}>
                  <strong>Ads 1</strong>
                </span>
                <span style={{ color: "rgb(184, 49, 47)" }}>
                  . our product is nice{" "}
                </span>
                <span style={{ color: "rgb(163, 143, 132)" }}>
                  <a
                    href="https://github.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    check it.
                  </a>
                </span>
                <span style={{ color: "rgb(184, 49, 47)" }}>&nbsp;</span>
                <span style={{ color: "rgb(44, 130, 201)" }}>
                  <strong>Ads 2</strong>
                </span>
                <span style={{ color: "rgb(184, 49, 47)" }}>
                  . our product is nice{" "}
                </span>
                <span style={{ color: "rgb(85, 57, 130)" }}>
                  <a
                    href="https://github.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    check it
                  </a>
                </span>
                <span style={{ color: "rgb(184, 49, 47)" }}>.&nbsp;</span>
                <span style={{ color: "rgb(40, 50, 78)" }}>
                  <strong>Ads 3</strong>
                </span>
                <span style={{ color: "rgb(184, 49, 47)" }}>
                  . our product is nice{" "}
                </span>
                <span style={{ color: "rgb(85, 57, 130)" }}>
                  <a
                    href="https://github.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    check it.
                  </a>
                </span>
                <span style={{ color: "rgb(184, 49, 47)" }}>&nbsp;</span>
                <span style={{ color: "rgb(250, 197, 28)" }}>
                  <strong>Ads 4</strong>
                </span>
                <span style={{ color: "rgb(184, 49, 47)" }}>
                  . our product is nice{" "}
                </span>
                <span style={{ color: "rgb(85, 57, 130)" }}>
                  <a
                    href="https://github.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    check it.
                  </a>
                </span>
                <span style={{ color: "rgb(184, 49, 47)" }}>&nbsp;</span>
                <span style={{ color: "rgb(85, 57, 130)" }}>
                  <a
                    href="https://github.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Need Ads?
                  </a>
                </span>
              </p>
            </marquee>
            <center>
              <input
                type="button"
                defaultValue="Stop Ads"
                onClick={() => {
                  document.getElementById("mymarquee").stop();
                }}
              />
              <input
                type="button"
                defaultValue="Start Ads"
                onClick={() => {
                  document.getElementById("mymarquee").start();
                }}
              />
            </center>
          </div>
        </div>
        {/* main */}
        <div>{props.component}</div>

        {/* footer */}
        <div class="right_site_download_app">
          <p>
            DOWNLOAD PWA APPS
            <br />
            <a href="#" rel="noopener noreferrer" target="_blank">
              ANDROID
            </a>{" "}
            <a href="#" rel="noopener noreferrer" target="_blank">
              APPLE
            </a>{" "}
            <a href="#" rel="noopener noreferrer" target="_blank">
              WINDOWS
            </a>{" "}
            <a href="#" rel="noopener noreferrer" target="_blank">
              LINUX
            </a>
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomeIndex;

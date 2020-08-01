import React from 'react';

export default function Testimonial() {
  return (
    <>
      <div className="text-center mt-16 mb-10">
        <div className="border-b w-1/3 m-auto mb-4">
          <h1 className="font-bold text-5xl ">Want to meet us?</h1>
        </div>

        <div className="grid grid-cols-3 mt-10">
          <div className="Card">
            <img
              className="Team-Pro boxshadow "
              src={require('../images/wissam.png')}
              alt="wissam"
            ></img>
            <div>
              <h1 className="Member-Name">Wissam Naji</h1>
              <div>Lorem ipsum is placeholder </div>
              <div>commonly used in the graphic, print,</div>
              <div>and publishing industries for</div>
              <div>previewing layouts and visual</div>
              <div>mockups.</div>
            </div>
          </div>

          <div className="Card">
            <img
              className="Team-Pro boxshadow "
              src={require('../images/hanan.jpg')}
              alt="hanan"
            ></img>
            <div>
              <h1 className="Member-Name">Hanan Dlshad</h1>
              <div>Lorem ipsum is placeholder </div>
              <div>commonly used in the graphic, print,</div>
              <div>and publishing industries for</div>
              <div>previewing layouts and visual</div>
              <div>mockups.</div>
            </div>
          </div>
          <div className="Card">
            <img
              className="Team-Pro boxshadow "
              src={require('../images/Kherow.png')}
              alt="Ahmed Ayad"
            ></img>
            <div>
              <h1 className="Member-Name">Ahmed Ayad</h1>
              <div>Lorem ipsum is placeholder </div>
              <div>commonly used in the graphic, print,</div>
              <div>and publishing industries for</div>
              <div>previewing layouts and visual</div>
              <div>mockups.</div>
            </div>
          </div>

          <div className="Card">
            <img
              className="Team-Pro boxshadow "
              src={require('../images/duhoki.png')}
              alt="Ahmed duhoki"
            ></img>
            <div>
              <h1 className="Member-Name">Ahmed Abdul-razaq</h1>
              <div>Lorem ipsum is placeholder </div>
              <div>commonly used in the graphic, print,</div>
              <div>and publishing industries for</div>
              <div>previewing layouts and visual</div>
              <div>mockups.</div>
            </div>
          </div>

          <div className="Card">
            <img
              className="Team-Pro boxshadow "
              src={require('../images/shna.png')}
              alt="shna"
            ></img>
            <div>
              <h1 className="Member-Name">Shna Rafeeq</h1>
              <div>Lorem ipsum is placeholder </div>
              <div>commonly used in the graphic, print,</div>
              <div>and publishing industries for</div>
              <div>previewing layouts and visual</div>
              <div>mockups.</div>
            </div>
          </div>
          <div className="Card">
            <img
              className="Team-Pro boxshadow "
              src={require('../images/jalal.png')}
              alt="jalal"
            ></img>
            <div>
              <h1 className="Member-Name">Jalal Arif</h1>
              <div>Lorem ipsum is placeholder </div>
              <div>commonly used in the graphic, print,</div>
              <div>and publishing industries for</div>
              <div>previewing layouts and visual</div>
              <div>mockups.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

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
              <div>I am 20 years old,I am a senior Software Engineer</div>
              <div> student.I love coding cause I start learning</div>
              <div>web development with awesome Bootcamp (Re: Coded)</div>
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
              <div>I’m 24 years old guy who makes UI/UX </div>
              <div>design and I do web development,</div>
              <div> science fictions are my favorite inspiration</div>
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
              <div> 20 years old, Software Engineer,Learner</div>
              <div>and Enthusiastic coder utilizing</div>
              <div> every opportunity to expand his arsenal.</div>
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
              <div>I am 21 years old senior Software Engineer </div>
              <div>estudent, who started her journey </div>
              <div>for the world of web developing with Re:coded.</div>
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
              <div>
                I am 22 years old,currently Software engineer.also trying
              </div>
              <div>to be Web Dev. I have started for 5 month</div>
              <div>new experience before with Re:Coded</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

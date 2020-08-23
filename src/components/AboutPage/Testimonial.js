import React from 'react';

import wisam from '../../assets/wissam.png';
import hanan from '../../assets/hanan.jpg';
import kheerow from '../../assets/Kherow.png';
import duhoki from '../../assets/duhoki.png';
import shna from '../../assets/shna.png';
import jalal from '../../assets/jalal.png';

export default function Testimonial() {
  return (
    <>
      <div className="text-center mt-16 mb-10">
        <div className="border-b w-1/3 m-auto mb-4">
          <h1 className="font-bold text-5xl ">Want to meet us?</h1>
        </div>

        <div className="grid grid-cols-3 mt-10">
          <div className="Card">
            <img className="Team-Pro boxshadow " src={wisam} alt="wissam"></img>
            <div>
              <h1 className="Member-Name">Wisam Naji</h1>
              <div>A lead trainer with Re:Coded</div>
              <div>Love developing products</div>
              <div>that contribute to the community.</div>
            </div>
          </div>

          <div className="Card">
            <img className="Team-Pro boxshadow " src={hanan} alt="hanan"></img>
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
              src={kheerow}
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
              src={duhoki}
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
            <img className="Team-Pro boxshadow " src={shna} alt="shna"></img>
            <div>
              <h1 className="Member-Name">Shna Rafeeq</h1>
              <div>I am 21 years old senior Software Engineer </div>
              <div>estudent, who started her journey </div>
              <div>for the world of web developing with Re:coded.</div>
            </div>
          </div>
          <div className="Card">
            <img className="Team-Pro boxshadow " src={jalal} alt="jalal"></img>
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

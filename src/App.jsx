import { Component, useState } from 'react'
import Db from './button.jsx'
import Db1 from './button2.jsx'
import Ic1 from './infocard.jsx'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menubar from './Menu.jsx'
function App() {
  return (
    <>
      <header>
        <div className="mb">
          <Menubar className="on1" style={{}}></Menubar>
        </div>
      </header>
      <main>
        <section className="s1">
          <div className="s1 flex">
            <div className="s1d1 s1 flex justifycentre aligncentre ">
              <div className="s1 s1d1 s1d1text flex flexcol justifycentre aligncentre textcentre">
                <p className="textcentre" style={{ color: "#F4F4F5" }} id="p1">
                  Lorem ipsum dolor sit.
                </p>
                <p className="textcentre" id="p2" style={{ color: "#5649D8" }}>
                  Lorem ipsum dolor sit amet.
                </p>
                <Db>
                  <p className="textcentre">download now</p>
                </Db>
              </div>
            </div>
            <div className="s1d2 on2 s1" id="centre partition"></div>
            <div className="s1d3 s1">
              <div className="s1" id="s1text">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Illum voluptate aperiam sed, ab inventore veritatis voluptas
                  eum voluptatibus! Necessitatibus libero cupiditate nam fugit
                  perferendis, quae dolores quo nisi iure maxime cum voluptates
                  suscipit qui tempora vero sapiente eveniet praesentium
                  nesciunt aliquid repudiandae laboriosam quis odit impedit
                  magnam? Asperiores optio aliquam et error possimus? Asperiores
                  minus aut in eius laudantium dolore dolorum et delectus.
                </p>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat cum aperiam excepturi beatae delectus? Rerum velit
                  voluptate quos animi nobis quisquam voluptatibus ea delectus
                  odio aperiam inventore similique deleniti nisi ut, explicabo
                  ab fuga totam corrupti .
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                  id ipsum rem vitae voluptate beatae perspiciatis animi
                  repellat sunt quo praesentium maxime, eius quam. Nesciunt
                  nulla sapiente ullam at a.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="s2 s2h justifycentre">
          <div className="s2 s2d1 flex flexcol justifycentre textcentre aligncentre ">
            <h1 className="s2 s2d1h1" style={{fontSize:'3rem'}}>Section</h1>
            <p className="s2 s2d1p1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
              ea.
            </p>
          </div>
          <div className="s2 s2d2 grid1 flex flexrow justifycentre aligncentre" style={{flexWrap:'wrap', paddingLeft:'0.5vw'}}>
            <div className="Ic1 textcentre flex justifycentre flexcol gc1 br1 bcgc1 ">
              <h1>Lorem</h1>
              <p>Lorem, ipsum dolor.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, officiis!
              </p>
              <Db1></Db1>
            </div>
            <div className="Ic1 textcentre flex justifycentre flexcol gc1 br1 bcgc1 ">
              <h1>Lorem</h1>
              <p>Lorem, ipsum dolor.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, officiis!
              </p>
              <Db1></Db1>
            </div>
            <div className="Ic1 textcentre flex justifycentre flexcol gc1 br1 bcgc1 ">
              <h1>Lorem</h1>
              <p>Lorem, ipsum dolor.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, officiis!
              </p>
              <Db1></Db1>
            </div>
            <div className="Ic1 textcentre flex justifycentre flexcol gc1 br1 bcgc1 ">
              <h1>Lorem</h1>
              <p>Lorem, ipsum dolor.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, officiis!
              </p>
              <Db1></Db1>
            </div>
            <div className="Ic1 textcentre flex justifycentre flexcol gc1 br1 bcgc1 ">
              <h1>Lorem</h1>
              <p>Lorem, ipsum dolor.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, officiis!
              </p>
              <Db1></Db1>
            </div>
            <div className="Ic1 textcentre flex justifycentre flexcol gc1 br1 bcgc1 ">
              <h1>Lorem</h1>
              <p>Lorem, ipsum dolor.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam, officiis!
              </p>
              <Db1></Db1>
            </div>
            
          </div>
        </section>
      </main>
    </>
  );
}

export default App;

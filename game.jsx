import * as React from "react";
import { animated } from "react-spring";
import { useWiggle } from "../hooks/wiggle";
import { Link } from "wouter";

export default function Game() {
  
  return (
    <>
      <h1 className="games">INTERACTIVE GAMES</h1>
      <h2>Here are a few games to learn more about quality eudaction in a hands-on setting!</h2>
      
      <div class="games">
            <h3>INTERACTIVE GAMES</h3>
            <p>
              Here a few games to engage more with Quality Education while also
              having fun!
            </p>
          </div>
        <form action="https://replit.com/@tle10/math-game?v=1" target="_blank">
            <button type="submit">Math Game</button>
        </form>
      <br>
      </br>
      <form action ="https://replit.com/@spras3/HangmanGameHackathon?v=1" target = "_blank">
        <button type="submit">Hangman</button>
      </form>
      <br>
      </br>
      <form action = "https://editor.p5js.org/vbala3/full/1uF6QKEBf" target = "_blank">
        <button type = "submit">C5</button>
      </form>
    </>
  );
}

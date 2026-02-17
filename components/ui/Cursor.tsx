"use client";
import AnimatedCursor from "react-animated-cursor";

export default function Cursor() {
  return (
    <div className="hidden md:block"> 
      <AnimatedCursor
        innerSize={8}       
        outerSize={35}      
        color="34, 211, 238" 
        outerAlpha={0.2}    
        innerScale={1}
        outerScale={2}      
        
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
        
        outerStyle={{
          border: '1px solid var(--cursor-color)',
          mixBlendMode: 'exclusion' 
        }}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)',
          mixBlendMode: 'exclusion'
        }}
      />
    </div>
  );
}
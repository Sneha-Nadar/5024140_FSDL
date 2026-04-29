import { useEffect } from "react";

export default function AngularWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div dangerouslySetInnerHTML={{
      __html: `
      <div ng-app="">
        <h2>AngularJS Live</h2>
        <input ng-model="name" placeholder="Enter name">
        <p>Hello {{name}}</p>
      </div>
      `
    }} />
  );
}
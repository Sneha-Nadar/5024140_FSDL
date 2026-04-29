import { useEffect } from "react";

export default function AngularWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js";

    script.onload = () => {
      const app = window.angular.module("myApp", []);
      app.controller("myCtrl", function ($scope) {
        $scope.name = "";
      });

      window.angular.bootstrap(
        document.getElementById("angular-root"),
        ["myApp"]
      );
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div id="angular-root">
      <div ng-controller="myCtrl">
        <h2>AngularJS</h2>
        <input ng-model="name" placeholder="Enter name" />
        <p>Hello {{name}}</p>
      </div>
    </div>
  );
}
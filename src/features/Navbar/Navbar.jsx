import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="bg-indigo">
        <div className="container mx-auto py-4 ">
          <div className="flex justify-between items-center text-grey-lightest px-4 sm:px-0 ">
            <div className="flex sm:hidden">
              <i className="material-icons text-3xl">menu</i>
            </div>
            <div className="text-3xl self-center leading-normal uppercase font-hairline">
              Gather
            </div>
            <div className="flex items-center">
              <img
                src="https://avatars0.githubusercontent.com/u/39636592?s=460&v=4"
                alt=""
                className="h-8 w-8 rounded-full opacity-75"
              />
              <div className="hidden sm:flex items-center">
                <div className="pl-2 pr-1 font-bold font-light text-sm">
                  Stefaan Sterk
                </div>
                <i className="material-icons opacity-50 text-md">
                  arrow_drop_down
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;

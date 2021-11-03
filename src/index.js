import { Utils, Device } from '@nativescript/core';
// import { Observable } from "tns-core-modules/data/observable";

export function helloWorld() {
  console.log("Hello World");

  com.huawei.MyToast(Utils.android.getApplicationContext(), "You pressed the button","short", "short");
}
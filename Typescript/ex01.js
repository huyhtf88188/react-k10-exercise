"use strict";
{
    const username = "hoang";
    let age = 20;
    let isTeacher = true;
}
// Array
{
    const myStudent = ["Hoang", "Huy", "Thai"];
    const arr1 = [1, 2, "F8"]; //tuple
    const arr2 = [1, 2, "Hoang", "F8"];
    console.log(arr1, arr2);
    console.log(arr1, arr2);
    console.log(arr1, arr2);
    let isMarried = true;
    // enum: "male", "female", "other"
    let Gender;
    (function (Gender) {
        Gender[Gender["Male"] = 0] = "Male";
        Gender[Gender["Female"] = 1] = "Female";
        Gender[Gender["Other"] = 2] = "Other";
    })(Gender || (Gender = {}));
    let gender = Gender.Male;
    let GioiTinh;
    (function (GioiTinh) {
        GioiTinh[GioiTinh["Nam"] = 0] = "Nam";
        GioiTinh[GioiTinh["Nu"] = 1] = "Nu";
        GioiTinh[GioiTinh["Khac"] = 2] = "Khac";
    })(GioiTinh || (GioiTinh = {}));
    let gioiTinh = GioiTinh.Nam;
}
//# sourceMappingURL=ex01.js.map
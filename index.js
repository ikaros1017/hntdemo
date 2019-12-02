var app = new Vue({
    el: '#app',
    data: {
        arr1: [],
        arr2: [],
        arr3: [],
        about: "",
        length: "",
        i: 0,
        j: 0,
        num: "",
        switch: false
    },
    computed: {
        firstBox: function () {
            return function () {
                if (this.about) {
                    if (this.arr1.length) {
                        if (this.about < this.arr1[0]) {
                            this.arr1.push(this.about);
                            this.about = "";
                            this.arr1.sort(function (a, b) {
                                return a - b;
                            })
                        }
                    } else {
                        this.arr1.push(this.about);
                        this.about = "";
                    }
                } else {
                    this.about = this.arr1.splice(0, 1)[0];
                }
            }
        },
        secondBox: function () {
            return function () {
                if (this.about) {
                    if (this.arr2.length) {
                        if (this.about < this.arr2[0]) {
                            this.arr2.push(this.about);
                            this.about = "";
                            this.arr2.sort(function (a, b) {
                                return a - b;
                            })
                        }

                    } else {
                        this.arr2.push(this.about);
                        this.about = "";
                    }
                } else {
                    this.about = this.arr2.splice(0, 1)[0];
                }
            }
        },
        thirdBox: function () {
            return function () {
                if (this.about) {
                    if (this.arr3.length) {
                        if (this.about < this.arr3[0]) {
                            this.arr3.push(this.about);
                            this.about = "";
                            this.arr3.sort(function (a, b) {
                                return a - b;
                            })
                        }
                    } else {
                        this.arr3.push(this.about);
                        this.about = "";
                    }
                } else {
                    this.about = this.arr3.splice(0, 1)[0];
                }
            }
        },
        count: function () {
            return function () {
                this.i++;
                if (this.switch && this.arr3.length == this.length) {
                    setTimeout(() => {
                        alert("游戏结束，你一共用了" + this.i / 2 + "步" +"\n最优解为"+this.j+"步");
                    }, 100)
                }
            }
        },
        start: function () {
            return function () {
                if (this.num) {
                    this.length = this.num;
                    this.arr1 = [];
                    this.arr2 = [];
                    this.arr3 = [];
                    this.i =0;
                    for (var i = 1; i <= this.length; i++) {
                        this.arr1.push(i);
                    }
                    this.switch = true;
                    var a = 0;
                    var hanoi = function (n) {
                        if (n > 0) {
                            hanoi(n - 1);
                            hanoi(n - 1);
                            a++;
                        }
                    }
                    hanoi(this.length);
                    this.j = a;
                } else {
                    alert("请输入数字")
                }

            }
        }
    },
})
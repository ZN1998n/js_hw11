let computer = {
    processor: "Intel Core i7-13700KF",
    videoCard: "GeForce RTX 4070 Ti",
    ram: 32,
    psu: "Cooler 1500 w",
    motherboard: "Gigabyte Z790 Gaming X",
    memorySsd: "Lexar 1 Tb",
    cooling: "Deep Cool",
    case: "DeepCool WAVE V2",
    bluetooth: false
}

let parts = {
    mouse: "HyperX Pulsefire Haste",
    keyboard: "HyperX Alloy Elite 2",
    headset: "HyperX Cloud Alpha",
    monitor: 27,
    carpet: "Fury S",
    wifi: true
}

let add = Object.assign( {} ,computer, {parts})

let keys = Object.keys(add)

let values = Object.values(add)

let arr = [...keys, ...values]

let types = {
    strings: [],
    numbers: [],
    booleans: [],
    objects: []
}

arr.forEach((element) => {
    if (typeof element === "string") {
      types.strings.push(element);
    } else if (typeof element === "number") {
      types.numbers.push(element);
    } else if (typeof element === "boolean") {
      types.booleans.push(element);
    } else if (typeof element === "object") {
      types.objects.push(element);
    } 
  })

  console.log(types)





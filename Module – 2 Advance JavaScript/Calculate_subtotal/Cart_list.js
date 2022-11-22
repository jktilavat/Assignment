function row1() {
  let a = document.getElementById("qty").value;
  let b = document.getElementById("prc_per_unit").value;

  let c = document.getElementById("qty1").value;
  let d = document.getElementById("prc_per_unit1").value;

  let e = document.getElementById("row3_text_qty").value;
  let f = document.getElementById("prc_per_unit_row3").value;

  let g = document.getElementById("row4_text_qty").value;
  let h = document.getElementById("prc_per_unit_row4").value;

  let x = (document.getElementById("sub_total").innerHTML = a * b);
  let y = (document.getElementById("sub_total1").innerHTML = c * d);
  let z = (document.getElementById("sub_total3").innerHTML = e * f);
  let za = (document.getElementById("sub_total4").innerHTML = g * h);

  document.getElementById("sub_total_main").innerHTML = x + y + z + za;
}

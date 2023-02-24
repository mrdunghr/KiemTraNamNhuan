function btn() {
    let year = parseInt(prompt("Nhập Số Năm"));
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0) {
                alert('Năm Nhuận')
            } else {
                alert('Năm Không Nhuận');
            }
        } else {
            alert('Năm Nhuận');
        }
    } else {
        alert('không phải năm nhuận');
    }
}

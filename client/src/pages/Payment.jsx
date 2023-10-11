

const Payment=(props)=> {
// const { method } = match.params;

return (
<div>
    {props.selectMethod === "creditCard" && (
    <div>
        <h2>ชำระเงินด้วยบัตรเครดิต</h2>
        {/* แสดงแบบฟอร์มสำหรับกรอกข้อมูลบัตรเครดิต */}
    </div>
    )}

    {method === "qrCode" && (
    <div>
        <h2>สแกนคิวอาร์โค้ดเพื่อชำระเงิน</h2>
        {/* แสดง QR Code สำหรับการสแกน */}
    </div>
    )}

    {method === "bankTransfer" && (
    <div>
        <h2>โอนเงินผ่านบัญชีธนาคาร</h2>
        {/* แสดงข้อมูลธนาคารและเลขบัญชีสำหรับโอนเงิน */}
    </div>
    )}
</div>
);
}

export default Payment;
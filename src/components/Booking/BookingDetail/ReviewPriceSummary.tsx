function ReviewPriceSummary() {
  return (
    <div className="border-[1px] border-grey-d9">
      <div className="font-bold bg-grey-f5 px-4 py-2">Your price summary</div>
      <div className="text-sm leading-[1.5] pt-4 pb-6 px-4">
        <div className="flex justify-between mb-2">
          <div className="">
            <span>2</span> x <span>Adult Package</span>
          </div>
          <div>200đ</div>
        </div>
        <div className="font-bold flex justify-between mb-6">
          <p>Total</p>
          <p>200đ</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p>Amount Ex. Tax</p>
            <p>169đ</p>
          </div>
          <div className="flex justify-between">
            <p>VAT</p>
            <p>7đ</p>
          </div>
          <div className="flex justify-between">
            <p>Suong test</p>
            <p>12đ</p>
          </div>
          <div className="flex justify-between">
            <p>VAT</p>
            <p>7đ</p>
          </div>
          <div className="flex justify-between">
            <p>Service charges</p>
            <p>3đ</p>
          </div>
          <div className="flex justify-between">
            <p>Suong check 29/8</p>
            <p>3đ</p>
          </div>
          <div className="font-bold flex justify-between">
            <p>Amount Inc. Tax</p>
            <p>200đ</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewPriceSummary;

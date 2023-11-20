import { useAppSelector } from '@/hooks';
import { formatCurrency } from '@/utils/helper';

function ReviewPriceSummary({ data }: { data: any }) {
  const { business_currency } = useAppSelector((state) => state.business.basic_business_info);
  return (
    <div className="border-[1px] border-grey-d9">
      <div className="font-bold bg-grey-f5 px-4 py-2">Your price summary</div>
      <div className="text-sm leading-[1.5] pt-4 pb-6 px-4">
        <div className="flex justify-between mb-2">
          <div className="">
            <span>{data?.adults}</span> x <span>Adult Package</span>
          </div>
          <div>{formatCurrency(business_currency).format(data?.adult_price)}</div>
        </div>
        <div className="flex justify-between mb-2">
          <div className="">
            <span>{data?.child}</span> x <span>Child Package</span>
          </div>
          <div>{formatCurrency(business_currency).format(data?.child_price)}</div>
        </div>
        <div className="font-bold flex justify-between mb-6">
          <p>Total</p>
          <p>{formatCurrency(business_currency).format(data?.reservations_amount_price)}</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p>Amount Ex. Tax</p>
            <p>{formatCurrency(business_currency).format(data?.reservations_amount_sub)}</p>
          </div>
          {data?.taxes_breakdown?.map((tax_item: any, index: number) => (
            <div key={index} className="flex justify-between">
              <p>{tax_item?.title}</p>
              <p>{formatCurrency(business_currency).format(tax_item?.amount)}</p>
            </div>
          ))}
          <div className="font-bold flex justify-between">
            <p>Amount Inc. Tax</p>
            <p>{formatCurrency(business_currency).format(data?.reservations_amount_price)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewPriceSummary;

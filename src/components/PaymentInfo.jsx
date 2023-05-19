import React from 'react'

export const PaymentInfo = () => {
  return (
    <section>
        <div>PaymentInfo</div>
        <div>
            <input type="text" placeholder='xxxx-xxxx-xxxx-xxxx' />
            <input type="date" name="date" id="" placeholder='expiry date' />
            <input type="number" name="pinpas" id="" placeholder='pass code' />
        </div>
    </section>
  )
}

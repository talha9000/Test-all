import React, { useState } from 'react'
import Step_1 from '../Steps/Step_1'
import Step_2 from '../Steps/Step_2'
import Step_3 from '../Steps/Step_3'

const Steps = () => {
  const [cs, scs] = useState({ step: 1 });

  const handleNext = () => {
    if (cs.step < 3) {
      scs({ step: cs.step + 1 });
    }
  };

  const handlePrevious = () => {
    if (cs.step > 1) {
      scs({ step: cs.step - 1 });
    }
  };

  return (
    <>
      <div className='pt-56'>
        <div>
          {cs.step === 1 && <Step_1 />}
          {cs.step === 2 && <Step_2 />}
          {cs.step === 3 && <Step_3 />}
        </div>
        <div>
          <button className="btn btn-outline btn-primary" onClick={handlePrevious} disabled={cs.step === 1}>Previous Step</button>
          <button className="btn btn-outline btn-primary" onClick={handleNext} disabled={cs.step === 3}>Next Step</button>
        </div>
      </div>
    </>
  );
}

export default Steps;

import React from "react";
import Switch from "rc-switch";
import "../../sass/taskFeed/switchers.sass";
import "../../sass/taskFeed/switch.sass";
const Switchers = () => {
  return (
    <div className="switchers">
      <div className="switchers__row">
        <p>Доступны новичку</p>
        <div>
          <Switch
            // onChange={onChange}
            // onClick={onChange}
            // disabled={disabled}
            checkedChildren=""
            unCheckedChildren=""
          />
        </div>
      </div>
      <div className="switchers__row">
        <p>Моментальная выплата</p>
        <div>
          <Switch
            // onChange={onChange}
            // onClick={onChange}
            // disabled={disabled}
            checkedChildren=""
            unCheckedChildren=""
          />
        </div>
      </div>
    </div>
  );
};

export default Switchers;

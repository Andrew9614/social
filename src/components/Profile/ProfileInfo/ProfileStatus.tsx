import { useState, useEffect } from 'react';
type ProfileStatusProps = {
  status: string;
  putProfileStatus: (status: string) => void;
};
export const ProfileStatus = ({
  status,
  putProfileStatus,
}: ProfileStatusProps) => {
  const [statusIsEdit, toggleStatus] = useState(false);
  const [statusValue, setStatusValue] = useState(status);
	const handleInputBlur = ()=>{
		toggleStatus(!statusIsEdit);
		putProfileStatus(statusValue);
	}

	useEffect(()=>{
		setStatusValue(status)
	},[status])

  return (
    <div>
      {statusIsEdit ? (
        <div>
          <input
            autoFocus={true}
            onBlur={() => handleInputBlur()}
            value={statusValue}
            onChange={(e) => {
              setStatusValue(e.target.value);
            }}
          />
        </div>
      ) : (
        <div>
          <p onClick={() => toggleStatus(!statusIsEdit)}>{status}</p>
        </div>
      )}
    </div>
  );
};

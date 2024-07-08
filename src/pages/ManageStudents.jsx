// src/components/ManageUsersTable.js
import React from 'react';
import { Table } from 'antd';
import { useSelector, useDispatch } from 'react-redux';// Replace with your user slice/actions

const ManageStudents = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.students); // Replace with your selector

  const columns = [
    {
        title: 'Name',
        render: (text, record) => `${record.firstName} ${record.middleName} ${record.lastName}`,
        key: 'name',
    },
    {
      title: 'Class',
      dataIndex: 'className',
      key: 'className',
    },
    {
      title: 'Roll Number',
      dataIndex: 'roll_number',
      key: 'roll_number',
    },
    {
      title: 'View / Edit / Delete',
      render: (text,record) => (
        <div className='flex items-center gap-5'>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <g clip-path="url(#clip0_3_604)">
    <path d="M23.205 11.8047C22.3229 9.5229 20.7915 7.54962 18.8001 6.12873C16.8088 4.70783 14.4447 3.90159 12 3.80966C9.55543 3.90159 7.19134 4.70783 5.19995 6.12873C3.20856 7.54962 1.67717 9.5229 0.795047 11.8047C0.735473 11.9694 0.735473 12.1499 0.795047 12.3147C1.67717 14.5964 3.20856 16.5697 5.19995 17.9906C7.19134 19.4115 9.55543 20.2177 12 20.3097C14.4447 20.2177 16.8088 19.4115 18.8001 17.9906C20.7915 16.5697 22.3229 14.5964 23.205 12.3147C23.2646 12.1499 23.2646 11.9694 23.205 11.8047ZM12 18.8097C8.02505 18.8097 3.82505 15.8622 2.30255 12.0597C3.82505 8.25716 8.02505 5.30966 12 5.30966C15.975 5.30966 20.175 8.25716 21.6975 12.0597C20.175 15.8622 15.975 18.8097 12 18.8097Z" fill="#F33823"/>
    <path d="M12 7.55966C11.11 7.55966 10.24 7.82358 9.49994 8.31805C8.75991 8.81252 8.18314 9.51532 7.84254 10.3376C7.50195 11.1599 7.41283 12.0647 7.58647 12.9376C7.7601 13.8105 8.18868 14.6123 8.81802 15.2416C9.44736 15.871 10.2492 16.2996 11.1221 16.4732C11.995 16.6468 12.8998 16.5577 13.7221 16.2171C14.5443 15.8765 15.2471 15.2997 15.7416 14.5597C16.2361 13.8197 16.5 12.9497 16.5 12.0597C16.5 10.8662 16.0259 9.7216 15.182 8.87768C14.3381 8.03377 13.1935 7.55966 12 7.55966ZM12 15.0597C11.4067 15.0597 10.8266 14.8837 10.3333 14.5541C9.83994 14.2244 9.45543 13.7559 9.22836 13.2077C9.0013 12.6595 8.94189 12.0563 9.05765 11.4744C9.1734 10.8924 9.45912 10.3579 9.87868 9.93834C10.2982 9.51878 10.8328 9.23306 11.4147 9.11731C11.9967 9.00155 12.5999 9.06096 13.1481 9.28802C13.6962 9.51509 14.1648 9.8996 14.4944 10.393C14.8241 10.8863 15 11.4663 15 12.0597C15 12.8553 14.6839 13.6184 14.1213 14.181C13.5587 14.7436 12.7957 15.0597 12 15.0597Z" fill="#F33823"/>
  </g>
  <defs>
    <clipPath id="clip0_3_604">
      <rect width="24" height="24" fill="white" transform="translate(0 0.0596619)"/>
    </clipPath>
  </defs>
</svg>
            </button>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <g clip-path="url(#clip0_3_610)">
    <path d="M22.5 19.5597H1.5V21.0597H22.5V19.5597Z" fill="#F33823"/>
    <path d="M19.05 6.80966C19.65 6.20966 19.65 5.30966 19.05 4.70966L16.35 2.00966C15.75 1.40966 14.85 1.40966 14.25 2.00966L3 13.2597V18.0597H7.8L19.05 6.80966ZM15.3 3.05966L18 5.75966L15.75 8.00966L13.05 5.30966L15.3 3.05966ZM4.5 16.5597V13.8597L12 6.35966L14.7 9.05966L7.2 16.5597H4.5Z" fill="#F33823"/>
  </g>
  <defs>
    <clipPath id="clip0_3_610">
      <rect width="24" height="24" fill="white" transform="translate(0 0.0596619)"/>
    </clipPath>
  </defs>
</svg>
            </button>
            <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <g clip-path="url(#clip0_3_614)">
    <path d="M10.5 9.05966H9V18.0597H10.5V9.05966Z" fill="#F33823"/>
    <path d="M15 9.05966H13.5V18.0597H15V9.05966Z" fill="#F33823"/>
    <path d="M3 4.55966V6.05966H4.5V21.0597C4.5 21.4575 4.65804 21.839 4.93934 22.1203C5.22064 22.4016 5.60218 22.5597 6 22.5597H18C18.3978 22.5597 18.7794 22.4016 19.0607 22.1203C19.342 21.839 19.5 21.4575 19.5 21.0597V6.05966H21V4.55966H3ZM6 21.0597V6.05966H18V21.0597H6Z" fill="#F33823"/>
    <path d="M15 1.55966H9V3.05966H15V1.55966Z" fill="#F33823"/>
  </g>
  <defs>
    <clipPath id="clip0_3_614">
      <rect width="24" height="24" fill="white" transform="translate(0 0.0596619)"/>
    </clipPath>
  </defs>
</svg>
            </button>
        </div>
      ),
      key: 'actions',
    },
  ];

  return (
    <div className='p-5 w-full'>
        <Table columns={columns} dataSource={students} rowKey="_id" bordered={false}/>
    </div>
  );
};

export default ManageStudents;

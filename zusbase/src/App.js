import './App.css';
import 'antd/dist/antd.css'
import type, { SizeType } from 'antd/es/config-provider/SizeContext'
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd'
import {useState} from "react";
const {Paragraph} = Typography


function App() {
    const [editText, setEditText] = useState('This is for edit');

    return (
      <>
          <Paragraph
              editable={{
                  onChange: setEditText,
              }}
          >
              {editText}
          </Paragraph>
      </>
  );
}

export default App;

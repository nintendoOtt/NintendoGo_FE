import { Route, Routes} from 'react-router-dom'

import InviteInit from 'pages/InvitePage/InviteInit'
import InviteSetting from 'pages/InvitePage/InviteSetting'
import InviteWaiting from 'pages/InvitePage/InviteWaiting'


const InvitePage = () => (

    <Routes>
        <Route path="/init" element={<InviteInit />} />
        <Route path="/setting" element={<InviteSetting />} />
        <Route path="/waiting" element={<InviteWaiting />} />
    </Routes>

)

export default InvitePage

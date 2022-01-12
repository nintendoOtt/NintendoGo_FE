import { Route, Routes} from 'react-router-dom'

import InviteLayout from 'components/layout/InviteLayout'
import InviteInit from 'pages/InvitePage/InviteInit'
import InviteSetting from 'pages/InvitePage/InviteSetting'
import InviteWaiting from 'pages/InvitePage/InviteWaiting'


const InvitePage = () => (

    <InviteLayout>
        <Routes>
            <Route path="/init" element={<InviteInit />} />
            <Route path="/setting" element={<InviteSetting />} />
            <Route path="/waiting" element={<InviteWaiting />} />
        </Routes>
    </InviteLayout>

)

export default InvitePage

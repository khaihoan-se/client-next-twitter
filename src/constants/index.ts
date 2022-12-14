import ExploreActiveIcon from '@/components/icons/ExploreActiveIcon'
import ExploreLineIcon from '@/components/icons/ExploreLineIcon'
import HomeActiveIcon from '@/components/icons/HomeActiveIcon'
import HomeLineIcon from '@/components/icons/HomeLineIcon'
import MessageActiveIcon from '@/components/icons/MessageActiveIcon'
import MessageLineIcon from '@/components/icons/MessageLineIcon'
import NotificationActiveIcon from '@/components/icons/NotificationActiveIcon'
import NotificationLineIcon from '@/components/icons/NotificationLineIcon'
import ProfileActiveIcon from '@/components/icons/ProfileActiveIcon'
import ProfileLineIcon from '@/components/icons/ProfileLineIcon'
import ListActionIcon from '@/components/icons/ListActionIcon'
import ListLineIcon from '@/components/icons/ListLineIcon'
import BookmarkActiveIcon from '@/components/icons/BookmarkActiveIcon'
import BookmarkLineIcon from '@/components/icons/BookmarkLineIcon'

export const MENU_HEADER_LISTS = [
    { page: 'Home', path: '/home', icon: HomeLineIcon, activeIcon: HomeActiveIcon },
    { page: 'Explore', path: '/explore', icon: ExploreLineIcon, activeIcon: ExploreActiveIcon },
    { page: 'Notifications', path: '/notifications', icon: NotificationLineIcon, activeIcon: NotificationActiveIcon },
    { page: 'Messages', path: '/messages', icon: MessageLineIcon, activeIcon: MessageActiveIcon },
    { page: 'Bookmarks', path: '/i/bookmarks', icon: BookmarkLineIcon, activeIcon: BookmarkActiveIcon },
    { page: 'Lists', path: '/[userID]/lists', icon: ListLineIcon, activeIcon: ListActionIcon },
    { page: 'Profile', path: '/[userID]', icon: ProfileLineIcon, activeIcon: ProfileActiveIcon },
]
export const MENU_HEADER_LISTS_MOBILE = [
    { page: 'Explore', path: '/explore', icon: ExploreLineIcon, activeIcon: ExploreActiveIcon },
    { page: 'Settings', path: '/settings', icon: HomeLineIcon, activeIcon: HomeActiveIcon },
]

export const RULES = [
    { name: 'Giới thiệu', path: ''},
    { name: 'Trung tâm Trợ giúp', path: ''},
    { name: 'Điều khoản Dịch vụ', path: ''},
    { name: 'Chính sách Riêng tư', path: ''},
    { name: 'Chính sách cookie', path: ''},
    { name: 'Khả năng truy cập', path: ''},
    { name: 'Thông tin quảng cáo', path: ''},
    { name: 'Trạng thái', path: ''},
    { name: 'Nghề nghiệp', path: ''},
    { name: 'Tài nguyên thương hiệu', path: ''},
    { name: 'Quảng cáo', path: ''},
    { name: 'Tiếp thị', path: ''},
    { name: 'Twitter cho doanh nghiệp', path: ''},
    { name: 'Nhà phát triển', path: ''},
    { name: 'Danh mục', path: ''},
    { name: 'Cài đặt', path: ''},
]
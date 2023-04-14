<template>
  <div>
      <VueSidebarMenuAkahon />
  </div>
</template>

<script>
  import VueSidebarMenuAkahon from "vue-sidebar-menu-akahon";
  
  export default {
    name: 'component',
    components: {VueSidebarMenuAkahon},
    data() {
      return {}
  },
  props: {
      isMenuOpen: {
  type: Boolean,
  default: true,
},
menuTitle: {
  type: String,
  default: 'Akahon',
},
menuLogo: {
  type: String,
  default: '',
},
menuIcon: {
  type: String,
  default: 'bxl-c-plus-plus',
},
isPaddingLeft: {
  type: Boolean,
  default: true,
},
 menuOpenedPaddingLeftBody: {
  type: String,
  default: '250px'
},
menuClosedPaddingLeftBody: {
  type: String,
  default: '78px'
},
//! Menu items
menuItems: {
  type: Array,
  default: () => [
    {
      link: '#',
      name: 'Dashboard',
      tooltip: 'Dashboard',
      icon: 'bx-grid-alt',
    },
    {
      link: '#',
      name: 'User',
      tooltip: 'User',
      icon: 'bx-user',
    },
    {
      link: '#',
      name: 'Messages',
      tooltip: 'Messages',
      icon: 'bx-chat',
    },
    {
      link: '#',
      name: 'Analytics',
      tooltip: 'Analytics',
      icon: 'bx-pie-chart-alt-2',
    },
    {
      link: '#',
      name: 'File Manager',
      tooltip: 'Files',
      icon: 'bx-folder',
    },
    {
      link: '#',
      name: 'Order',
      tooltip: 'Order',
      icon: 'bx-cart-alt',
    },
    {
      link: '#',
      name: 'Saved',
      tooltip: 'Saved',
      icon: 'bx-heart',
    },
    {
      link: '#',
      name: 'Setting',
      tooltip: 'Setting',
      icon: 'bx-cog',
    },
  ],
},
//! Search
isSearch: {
  type: Boolean,
  default: true,
},
searchPlaceholder: {
  type: String,
  default: 'Search...',
},
searchTooltip: {
  type: String,
  default: 'Search',
},
//! Profile detailes
profileImg: {
  type: String,
  //default: require('../assets/img/photo.jpg'),
},
profileName: {
  type: String,
  default: 'Fayzullo Saidakbarov',
},
profileRole: {
  type: String,
  default: 'Frontend vue developer',
},
isExitButton: {
  type: Boolean,
  default: true,
},
isLoggedIn: {
  type: Boolean,
  default: true,
},
//! Styles
bgColor: {
  type: String,
  default: '#11101d',
},
secondaryColor: {
  type: String,
  default: '#1d1b31',
},
homeSectionColor: {
  type: String,
  default: '#e4e9f7',
},
logoTitleColor: {
  type: String,
  default: '#fff',
},
iconsColor: {
  type: String,
  default: '#fff',
},
itemsTooltipColor: {
  type: String,
  default: '#e4e9f7',
},
searchInputTextColor: {
  type: String,
  default: '#fff',
},
menuItemsHoverColor: {
  type: String,
  default: '#fff',
},
menuItemsTextColor: {
  type: String,
  default: '#fff',
},
menuFooterTextColor: {
  type: String,
  default: '#fff',
},
    }
  }
</script>
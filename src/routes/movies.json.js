export function get(req, res) {
  const movies = [
    {
      title: "York #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/GxR34Rfliuavl1gzd7IVlqRB3GI=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924425/1_SIAfw3W4n6waF51qtmDisw.0.jpeg"
    },
    {
      title: "York #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/C96ItvCyy5sh4dIyAJTaF40dSms=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924427/1_cMFkPu07uCrifAOu-2g3Dg.0.jpeg"
    },
    {
      title: "Larkin #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/Jg6EU0YR8nRAmF77fTlsxmaUTng=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924429/1_dMX5bDRIcmZFue0hQdLP9Q.0.jpeg"
    },
    {
      title: "Larkin #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/lnaq6l0yazaJxu-xiVHfra2f9_s=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924431/1_E3efRdYUl7RmioSAJpLR7Q.0.jpeg"
    },
    {
      title: "Lydia #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/xVy9rUIj_ViBvP-BRPXAUGwXW7E=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924433/1_RkrkTJSBqU3iuNj9N_4Amg.0.jpeg"
    },
    {
      title: "Lydia #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/DXBDcW_Ze5LXB6Mq1ucBV4lwYwM=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924435/1_SJca3HD5gzCgWpB7DoAufg.0.jpeg"
    },
    {
      title: "Andrea #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/i3DoOcnjiABYNRVZl_w3e9jwu8c=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924437/1_m5ZJs8AEGkDrG_9InuFZFQ.0.jpeg"
    },
    {
      title: "Andrea #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/2jok8jxp0pB_aPQSM-hjo8BC9aI=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924439/1_R4odYbL7DJt-bFq6BaaDbQ.0.jpeg"
    },
    {
      title: "Danica #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/CpNzD_oX9F6q4XXE3qwOrqtBm8k=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924443/1_WA3mqhLpGZRpjX7s1IT-Ig.0.jpeg"
    },
    {
      title: "Danica #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/ElMlA3fEfw6QF56Kjwa5Dxv8dRM=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924447/1_7V_XkrUf9DtIXfdv8fyWjw.0.jpeg"
    },
    {
      title: "Wes #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/GVI204TuCClcwOAOWJMPBXproX4=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924451/1_flq2JnM1kt-GqdNAaJOmvw.0.jpeg"
    },
    {
      title: "Wes #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/--ld7MonlZVoO4az9KaGZoal17s=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924453/1_8eZMu-5RDKaRRa65z-fYlg.0.jpeg"
    },
    {
      title: "Christina #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/Dm2gOgkvicsd91E2aAVKiDgucc4=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924455/1_YlZU4CoHVnxaTc_rTZQTGQ.0.jpeg"
    },
    {
      title: "Christina #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/iuSv0r2aYCAM4LxDAhtkuQUDRZE=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924457/1__loezTA2QW9JrCWvzqZVDQ.0.jpeg"
    },
    {
      title: "Manno #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/qNNUrkmI-r376jKE25IHA1t9_Q8=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924459/1_8iWER53H4k2eVtC9b16ZMA.0.jpeg"
    },
    {
      title: "Manno #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/v1aVpfD0EBZVjTuwL8f5cuRDUyw=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924461/1_Got-298f7Sq_RleYklyDcw.0.jpeg"
    },
    {
      title: "Ben #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/1Qr8EtVMcYXm_GJlEkhQMQnShP8=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924463/1_ysMN2BX61wYwlYglIilaZA.0.jpeg"
    },
    {
      title: "Ben #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/2weecDG1TGo131IBwgHNQoX6ino=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924467/1_qh-N710GCYqRSw-5fOUEMQ.0.jpeg"
    },
    {
      title: "Olga #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/I96Je0tnzaQM2TadjMCWoc533Xk=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924469/1_quASoVon6t8IM_zOEm4PhQ.0.jpeg"
    },
    {
      title: "Olga #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/CVB8O2IM8tf0SSX_TiePffNH8r4=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924471/1_I3SrES569brOEnGCwVHRyA.0.jpeg"
    },
    {
      title: "Elliot #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/XxWlUDtyB25NN0-MAtVN5rZVWTo=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924473/1_nkXmIhQdwT6b8vF1QtOiVA.0.jpeg"
    },
    {
      title: "Elliot #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/Jv2cUI6LDWyLwZoZL6t44T54iuQ=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924475/1_FJ0upsGecGdLo5hxFLFrEg.0.jpeg"
    },
    {
      title: "Tim #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/RFC3YBjlsQIFcLQTAyLGhrptAnE=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924477/1_9MuWfGi3ewx4ZWTEqQpeFQ.0.jpeg"
    },
    {
      title: "Tim #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/h8xXi-2vbz080h5PE34056M9zJ8=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924479/1_JjV631iWVxDANqJVz-jx7w.0.jpeg"
    },
    {
      title: "Andrew #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/7ckD9_DNbk_Bs5OvmFEMxBDb0FM=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924481/1_hhd9_TL8cfJVF-FUu1XieQ.0.jpeg"
    },
    {
      title: "Andrew #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/p2hhrDktSMxfDHVOmBiUfKXDc2I=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924483/1_O939bacu-OnsDsGjvPGnDw.0.jpeg"
    },
    {
      title: "Ally #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/9r7zJnareCr9sK7w5rfDRKX6Yps=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924487/1_laAovEJ8ITdLbZT61QNszQ.0.jpeg"
    },
    {
      title: "Ally #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/uRbluRcSC4-XGnLdFipaUiUdX3U=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924489/1_S65pOtIGexFXZS09AZvC3w.0.jpeg"
    },
    {
      title: "22. 'Troll 2' (1990)",
      image:
        "https://cdn.vox-cdn.com/thumbor/qxvUUxZJtS45kJK_FOedIHzAekA=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924491/1_eysADEnlvU0aMw_GFSW9Xg.0.jpeg",
    },
    {
      title: "Woody #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/Y3jGf_my_Fh0anFCsad80q41u9s=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924493/1__mXLKRjsQ-yqRjP-bIb86g.0.jpeg"
    },
    {
      title: "Woody #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/TyRPKVGSosY1ICEy6aaVLdK263I=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924495/1_ytri6oQ1epXiMgecTdmTXA.0.jpeg"
    },
    {
      title: "Dr Joe #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/TJZkLir1SUfCxuUvd32NokKuPjU=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924497/1_-L3Cf5vCAmqU3xaK0jTPFg.0.jpeg"
    },
    {
      title: "Dr Joe #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/OdlV6pKmcnLHG7BeEHxZAGdvbSg=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924501/1_Ci5Rvx8aMF3X5Ek7OT16Zg.0.jpeg"
    },
    {
      title: "Drew #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/d3aBeBqXyA0dHVPzUAe6ts4zV_U=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924503/1_g-sfQz5FXocKK0fdtgqJPg.0.jpeg"
    },
    {
      title: "Drew #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/8WUvWPP6VF_aNlCBTHA2LNG_Gcs=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924505/1_m9WP3Uf9rguZIoDUL0zBSw.0.jpeg"
    },
    {
      title: "Joe #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/I-nV09WiCYd-3GQNgpa09oYEEe4=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924507/1_vYwuFRhl_-pHHbI1t4USPQ.0.jpeg"
    },
    {
      title: "Joe #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/6l0ZGbDN8qxyM-z7J--6vA8zuaI=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924509/1_4eb82cJTgwK0Fy1JJ3ZNDQ.0.jpeg"
    },
    {
      title: "Brynn #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/_36T6hvpGLnzRy-yi4wuDEGMrRg=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924511/1_3YoxXCsJ4FgOLcs4lUVQMw.0.jpeg"
    },
    {
      title: "Brynn #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/ATsSevO6gZjVUPKBmfwYrN-0XFs=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924513/1_-Pv7xhzYm9LXtIjf7QuQww.0.jpeg"
    },
    {
      title: "Taylor #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/iPXJxib7vXDIkCxrMaBdBmDbRmk=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924515/1_Qux-atiCVl16-T_NAR0MYQ.0.jpeg"
    },
    {
      title: "Taylor #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/4bwlUjK8lhDFaaN1uAXLS4XgDe0=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924517/1_z_5VWJGJw_eO184BE_aF2Q.0.jpeg"
    },
    {
      title: "Teddie #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/jIbUwn1f2j2FdYSX_iE9T2YNY9A=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924519/1_PC8rfJlKQ6ptbJLJoQEDvQ.0.jpeg"
    },
    {
      title: "Teddie #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/g_62e8hgV4v41UOXRdfMEd_T3W4=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924521/1_j6GwEJrqooq8AxJLcq-bWg.0.jpeg"
    },
    {
      title: "Kate #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/0f_MfvQOFXJylWDJm-slMrdnVAo=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924523/1_WIDIXTBSsRu62joTNX1XzA.0.jpeg"
    },
    {
      title: "6. 'White Chicks' (2004)",
      image:
        "https://cdn.vox-cdn.com/thumbor/F3hUoccYMakezYMXYNVyhDnJeUw=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924525/1_6qDP8NOCfuJssepbYwJNhA.0.jpeg",
    },
    {
      title: "Kate #2",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/FZcqEL8V855FKB4M6xDB38TAk6Y=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924527/1_DuJulNqNDcVUcvHKyz7qag.0.jpeg"
    },
    {
      title: "Schmoe #1",
      // image:
      //   "https://cdn.vox-cdn.com/thumbor/FM5UwbMbYmnJuK65ZcMVhTX6R-8=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924529/1_KGwFf2kh9wMqXBumFKpkIA.0.jpeg"
    },
    {
      title: "3. 'Congo' (1995)",
      image:
        "https://cdn.vox-cdn.com/thumbor/T27BfC4Y591O81f9_dHdB2W7XXM=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924531/1_nY7zCd3rus8-hRjUWtLeMQ.0.jpeg",
    },
    {
      title: "2. 'Wild Wild West' (1999)",
      image:
        "https://cdn.vox-cdn.com/thumbor/0ZYicEAwUF6D0SthN6OOfSri6ew=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924535/1_vfopevJA2WEjQd-hDOYsog.0.jpeg",
    },
    {
      title: "1. 'Godzilla' (1998)",
      image:
        "https://cdn.vox-cdn.com/thumbor/cpk5N4qy8WrP0rTB8mNZqdHxzGo=/0x0:2500x400/1200x0/filters:focal(0x0:2500x400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8924537/1_hdgFfLLtrozbLZdl1tMzhA.0.jpeg",
    },
  ];

  return res.end(JSON.stringify(movies));
}

const items = [
  {
    id: 1,
    title: "Pane con marmellata",
    category: "breakfast",
    price: 2.95,
    img: "https://www.thespruceeats.com/thmb/abx-C65PX-C9s04dCqzzV_QIr9o=/3931x2948/smart/filters:no_upscale()/super-easy-bread-for-beginners-428108-hero-01-a3c09d713f9e4055977a72c391d353c9.jpg",
    info: "Pane e marmellata per una colazione equilibrata.",
  },
  {
    id: 2,
    title: "Fettine di maiale alla griglia",
    category: "dinner",
    price: 7.65,
    img: "https://www.dortacarni.it/wp-content/uploads/2019/04/ARROSTO-carne-scottone-scorzetta-043.jpg",
    info: "200g di suino messi sulla griglia",
  },
  {
    id: 3,
    title: "Pasta alla siciliana con pangrattato",
    category: "lunch",
    price: 5.95,
    img: "https://www.buttalapasta.it/wp-content/uploads/2021/04/pasta-ca-muddica.jpg",
    info: "120g di spaghetti con pangrattato, ricotta salata, pepe nero e marsala.",
  },
  {
    id: 4,
    title: "Frutta",
    category: "breakfast",
    price: 4.95,
    img: "https://www.nutrizionistaconza.it/wp-content/uploads/2019/05/calorie-frutta.jpg",
    info: "Si può ordinare un frutto specifico o lasciarsi andare alle voglie dello chef.",
  },
  {
    id: 5,
    title: "Verdure fritte",
    category: "dinner",
    price: 3.45,
    img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExIWFhUXFxgWFhcYFxgYGBUZFxcXGBgWFhcYHSggGBolGxUYITEhJSktLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lICUrLS0tLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xAA7EAABAwIFAgQEBAQHAAMBAAABAAIRAyEEBRIxQVFhInGBkQYTMqGxwdHwFEJS4RUjM2JygvFDstIH/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwQAAQIFBv/EADARAAEDAgMFCAIDAQEAAAAAAAEAAhEDIQQSMUFRYZHwBRMicYGxwdEyoRQj4fFS/9oADAMBAAIRAxEAPwD1lVcfhab2EVNhzMae88Jmc5vRwtI1az9LRsOXH+lo5K8T+LfjWvjnFo/y6I+mmDv3eeT22Cp5aBdYJWnx2e0qFUsbXFVn9QtHYnY+YRbCZrSqjf1XjlVpiDyu4PGVaR8DyOxuFy6uFY4yyy0Km9e4h3qFZbUXmGTfGJBAqAtO07tK22Azlj/P8Uk7Dluo9UTMjYqqRmKcDYqo2oHbJFhCE6kdi1KLUsZO9lZbWWf+bCe3EFZDiFS0Aqe6e0yhFLGdVap4kHYrQeNqtWnM5G6lpYuLO9/1VT5h4XHvsjU8Q+iZabbth64QqIlGAF2EPy7EQdB24/REV3qNUVWBzUM2XIShPShEVJkLsJ0JQoomQlCfCUKKJmlc0qSEoVyooixMNNWNKUKKKqWJpYrZamFqiirGmo3UuyuaU0tUVKi7DjoonYQIjoTTTVqIW7CKJ2E7Is5iboUUQb+F7JIvoSVQFF8+59mlbGVfmVXE/wBLZ8LB0aFJg8AGiSBJFu390ssw88Cwm/EcokWkusPJckuLyl5lU3YFrjf1UOJy5gmyI4iqG7hVmPJkm6vRaCAV6Wl23darAPJfTeGl5eQCxsjoOOyD4mHHYBa//wDm1Ka41fygkeQ/9CaouzeEogK2lb4eLb0nn/i7/wDQVaatO1RpHnsfULUPxtMbuCqV80oRBcI6bqVMGx122PBbzIOHtck6hGygzDHYUSWOIPQXHsqWCz6i86dcO6OtPlO6QrYVzfyHqtBwKvOeW77dVRxmblr9NKm6obTFmtJ4LutxZE61Qae5sIvc7KHJKIpsksky4unckk3XKxJFKfn/AC6bw9MPN1YwFHGvhxcxo5bpmO8zKmZg8Tr8ddmmdmsj0kkq9Sxo/kEk7xwohig0gO3J6G/W6U/kQBDvM7Pbrime5BP4j5U2HwD2P1OreEXA0ifcKri8zD3FrQ5xvpvMkdtgpsdRdUaQ1wYSQJgmB77kKhleX/KnWTr1GOjgLfitVq78mUGG7bm/Ph++SunTaL7UcpZm/S3wCQBrvzyB906rnQaRNGoQeWhpj0mT6IZTxbr6KZLQYPcqzTOoDdpIu20hOU+18QTMg+lvTT3mbiyG7CsGz9ojh84ov2Lx/wAqb2/chXaVVrhLXBw7EH8EDNfS2D7hD8Th3h/zqTy18QR/K/pqHVdCn2uJ8Y5Wjn9pd2F3Fa5JD8kzQV2XgVG/W38x2RKF2GPa9oc3QpUggwU1JdhchbVJSuSlC5Cii6VxdXFcKJFNTpTVSiRCYQnlJWooiEwtUxCaQoqUWlJSQkorXz3gn+LTwdzvA6rbZrWwtCiCCH1ngaYiGjueGiPMkrO/EmC/h3FtpbEkQLkagO9iFnziXRM369AVzoy2SzRsUmYYoudJMu7e/uuUn6d+VUkf3RHLMAarv9o3KoCbLSkw1AOudvxRbJqzmanNtPhHkFFi6VxTba3sOvmrdClpAaBsncPTy3Vqw7EVHGNRR/L8sBbdUcny1zjJFlraGEdEAJglWAhDskYeFXr/AAxTctUzAv6JmOpupNBIkkgNHJQKtQMYXnQCVtrMxACxz8udQIHzCWf0k7RzJuEVwtSAHRIO/ME3K5nUvdAaSYAcBEAdyUFxFTQXC7Y6yAfXZeMxlU4h+eI8l2qFNtNuWVpKGLYPXdXqLBvyeVgKNWprOiTrAAkyAZsR7/gnYnC5sxmqlWEtM6Roe4g8QRcX4ul6dENcAXtG7N/gPkjPNpgra5i3w6HQNXIP3JPdcwFXS0N1a+hI+wcPwlZHK8Zin0R/F3q6nbDTDQ6Lg/8Ab3R0POgmTAAP4IFcFtTw7+BH/Edrf6gDtRSjmb2mBTAbxGwnylUaGaUZNSprBksl3Wb6RNx91Xy7HE6WTuY7xeYRfG5JRcwvGkPF5gXJiOImQEw2r3lnNuJOvwTA69VarTSOuvBUa+Y0XhrmuIbqidBvE2B24VHOfiRoaGUpa5wN3y0ho+pzGwZcJFnRvzsq9d7Wi7KrjsfC6ABztYWQfFZzRbBbTiTYu3Hfk8I9NlMHwCfuPLriq8TrE6I18NUqlINcHv1ROp0+Kes7i9xstlQzhzad2y7ckm0kzYbrAUfiMFoDQXWu68DyButPkmANekyq6q0U3SRH1G97cEEI1CrjQ53dz6kACYuZEC4E6HcVmpSpQM/yZ4WWyw9XU0HqpEMo46m06B9LTEz91foVmuEtII7L1NCuyqIa4EjWN65T6bm6iApEknOABJ2Fyh9TNm7NaXH2/urq4inS/N0e/IX5BRlNz/xCvELmlBXZ09usuaCALAGCD0Pb7odhMyxeKeBTGim1w11BYW3a2R4j290s3tGi8hrJJOyL6xfd6o38V4GZ0Ab5WqIXITymlPpZNSTimlWouJpTk0qKLiSSSipfNuKrFxjieTPrPVRuHh9UTzXB0m1C1jjGogExfy7d0zC4TTJJkH97pNzZ0WCIsVUwODdUcAByL8ALZ4aiKbG06Ylzthy49+g5Q7BlsWEzsG8no3r3PC3/AMKZAW/51W7zsOGjoESlTAuq1VXKvhGBqqGXuu4/kOwR/B/DlMfyo7Swx8kzF4xlPwganxIbMW6k8c+yLUrMptzOMBEZTLjAT8PgGNEBoVltEBDqOdMJIfDIE7yO/CpZ5WNQ0gzZ3MGfEdMwekJJ3aFI0u8pHNpYWNyBtuNdoTDaDi7K63FE8xxvyh4W6jE7+33WZpGpUJqVAS522wDQYsLqi3DPqOluoNY4+MWDwDGxN53snYl1R0/LqQBYXgGJvME+y83ju0atYQ7widJnTjF/NdClhg02vxVpzWNJGqNR569NS5jMvaQZh3ZZbGVHUi2XEOJILg5xnmHarE+iOZbj3usXNjpsT+SSkBviE7ju9NI6hMml/wCT5gobhMnY2rr0lrhJgE6TIiSPVcq4lwJ8cAde3VHsU0AEm0X9NzKyFakCdWmPv7ysB3evOY6W9yjUA7LDU5+YuLjAmxBJFvQncq9/Fh7Q3pv+iFVqrYFx1I6J+ExLQ4P/AJQ1wPtP4ge6K6kMsgaLIBDpPUIll9WK9uB+ESEWxGOAdSYP6tRBJ8hPrJ9EAyd8anu3Hij8R7WRPLj4jXdEmQ3r38gAsPhpvst6pSpU7x8ev0Ecboc0uNiObj2WBzb4VxD3uxDND2OcTGzmjuNotvPotJmGYQwgD1vJnp7qxgMxIpwRFif7HzQ6FV9HxNGtuv8AEw+n/WCddiBYH4SruoghzWEgwSfEz/cRG33WkynDfw1BlGQ4gEvcP5nky4zySSpaeOaGSdIbAiZk6h4R++FWpiAS/rIk8d1uriXvZlItM7b9ac96xSGcZirGWVpc8G0/+c+SIfDlJtH5z31wZIGk2LQ2fcmeB7qrhKLSNYbBPJXTQawuIkA/Ve09u8JrBVjQLahbMTGu36us1Wh4LZ1+ESx+asqAsYTpIEu29BOyz2bZoKYgWMddo2UGY49jLM5n348gs1mWILyBO+63Vr1cQ/NUPLT0/wCn9LdOiym2ymzXOHljnAE7yvWcrphlGk0RAY0WEfyiT6m/qvIcvwT3zTbEH6nO+lg6uPH4r0zLK1PD0KdPU9+kAajySeJNhJgDgQF1+zXU6OcugTFzwSeNl+UN5I2Vwof/AInJgN+8qcYwAeK37+y6dPHUHmGu9x7gJA0njYrBTSF1jwdiD5JFNzIlDTVwhcFQdV0qBwIkKzZNhJdSVrK+fHUJdOkk/wDE390TyPIHVXRZkCfEdVp4aLSvVKGQUt/lMHooszwzab2MaGtAGowNySQBbyKRxpbQw7ntmdnmTGi1h6OeoAdNqB5XklPDv1O/zHcTb1d2Wsw2bNbZzPIg/jKzeJrhpLnETuRwB+PpyusrucYDYFjtf8YXmz2tjJHiFraAc4A+Ni6f8WiBEe/2tg3N2/0u+36oVnGJYarHhxu0t5ABBt+JQ+m2rFp84SxuHc5viB8xP5LVbH4mtSLXNBFjppBB6+FVOlTY6QUTaBHUeSdi8JrZyC0eGDsocC4FrYMhu/XborjXxHQqqXibDtCOj6H9hU6xkajr2QmpROj/AC3EgeHSOOIgbrOY3MHUnQ4PJ3jSdQH/AG/dlsamGLXhzSJnykctP6rO/FGHJqawfFsRxAuCD6pOrQa279dOGnrHknMNVObLNlE/DsqgOs4ECWuhuocEE3BCe7LjTGqnMbRbV9rEeXss/VqOpAH5gDZkNIJjmAR9M9wVd/xlhbckWmTdsddXCXNJ4Ai49UerTaTrCv5nix8tg5d1ibRJIPtHdZfGVy0Ei4A46iIlv2RXGZhTLBDtc9ASAOx5Qj+HbUnQYd0+mfQ29Cj4anlbLgkq9SPxd8KEio7SYHiPB27Hn9lSm4DYAEj15Ppsq3yatInU07EbG08x+ikpteA0uaeSXEENuDefMpws2iISxxbzOYq+a0MA21OJPkJn7q7Rrt+W0C2q5IuTewEoLi8WHERYBpJ7bAj7IxkGHfpDjLZvB4A/f7lKVWZWZjvUwxzuM6bTwRGjgXvOqI6ajtvdWqWW65bNv6rgd4kS77KaiGsBNR4AP9Vp/t2TKmZ0jP8AmhwGwbt1sNykszpldGalfQQPK6FYzAu1atYc5gGlg3ta7dySjWAwoDfmV3HVuGdPOdyuZHjGva6rTBAJnU4XcB+SjzDEwD3Jt6pprfCM1zfUadFUTENGgSzjM9LW6TPPlCC4nOdVP39lTzTFy6JsEFqv+ZIY6By4T7N6eaapUC8357FkvDQrdXGkmANTomJFvMkwPJV8NqqON4vHWPKEUyv4douAOq3N/e6J0PhxlN+oFxbtBMhvcfuya7tjOv8AUF1clUcLTqafk7N+oHbUT167IqypUFL5Za7sRf2n8EQw2GaOLDyRSmy1o2tI39Es4ZnHZOwCURtRsaKll7XimHmppm/iMmDf6eJ3UGbZrqGkGYN45FvtuhfxDhXOpuudQMtg89PyugOS4yo0ljrFpkHy6f2QgxzqZg7pG/ns8gihjZnkvR69dzaXzBYgW67fcdlbqZ01wHExbkz+SzOOzxxpBtp/FWcvY11NrwN2iYG5FtpPM3TTMRVEtYYBif3P0d8eQSbqbRBcLhHH4prYPX7D9FNk2K1B1MuDnU4uNi106fwI9EKD26QNUT1/VM+GxGMqaXAtNLxf8g5sf/ZybwFcjEtaNHfU/Avs4Sg1GSwnctTCSkSXpUiuxaVlM/qB1aGgkhul+0XOqB3g/da9zLQsdQrN1uBO7iRO+/MrjdsP/qbT/wDR9r9f6mcNZxduHupMNRYW2meZ3PdWThQPPqnsDdw2/JXXuPTyXLyeHxcNESbqF8hsRyP/ABda9wunumNp4/uu0XwfJUxwLgCSrIsohhWEyHODp32Pko8W9zbG44N9+kzYqWq+SBM+qfWpSNLhI/BAIaS5o0nX715g21RGvIiVTwWO+Yxw1eIcbRBsUNzXEaqjQLwIPoVNi8o+TFSmbCZHUHcT1VfDVmmq1w2c0g/aPwWHsd+Dtbcbag80YFv5N06shnxLl4qUYFrgyOBtJ90NwmH/APieyKkRe2wsRO4P3W0rUS0giI6Hgzb0n8VS+IcKa4Y8QKjSL7Q3m6ovMZH23KN3tWUy7DilVdSqAgTDegPHoQiX+GtcZAuNwOfL9FVxdN9N7XVSCHHTI6jb1/sjOEaWm1xyBuPLqDv6rFZ5/IHZz62pOq2DBU+GwYAAd4m8TePMbhcqU2ssIgzuRHrPCnq4oAagR57B3n/S4dVl81xxcbEjg/8AnBul2tc82KE0CYKuUfhEmp8z5jNMg6QCSG7gf7vF22sjrsI1tw7ewJiBHcb8/dB8jzAgaGtI0t8JP82n6gIO97eqI1sb4yCAA76mxY2kz53v1VVnPecr9nsnWUhTNrjXrZbcU5+VseQXuc4dWx9pG6zeKy95rlhcPlj+bmJOlpEWNhIHVHGYo6fCYa10A7/VbTPa3nEoLnjvl1abhy2/+5zTue9/wW8Lnz5J3x6daLoFxLc07kcpYv5YDA0QIHr19UMzjM9TgBxvH2CAZpmTyQxhgu3P9IHVUMRjTJYx0vO7jfSDye6fpUHRfb1KXe8TCt1qTqrzfwAxA56/vstX8PYCnzEN4WcypulwDrN3nf79fNaZmObTaQwtuOd/3+qYdUFOGAIRaXXU72Uy8x4TMSLCeh7q9hZbaQ4d+FmMHTqGZcRJm8H7kKxpqSWsqOsO3Pp3SxcGukIndgiFq8OGdh6puKrQQBeViK9XEUmvfUq6QI0mJ1TxHXsgeFr4moddQvg7AEj3DSisaXg3A5/Sx3YaV6BjKjpgAGeBeVjMbi3NrOp+Wo9JvHtCirZrVYwhtRwIB7nbgm/RC6DSBuS4ySTJ85PVap0JaSVbn5TAWodihAGoHbiI+9/ZaX4bqF7RAgceQnf3WHy7BPqOsJXouS0RRpwd9z9v1QXEBwAOmp+Fh1wmZm8MY4GJ4ib+6l+CKOo1MRBAcNDQegILjHFwFUznFsc3SZNwTwY6A+q1OCotYxoYIbAgDpuE/wBk0W1KxqT+I/ZnnFwl8S4tYGxr8K9qXFXlJekSKJMMgFYnE02/NJj+YiD5n8itXTcYjp+CCZ9gpDqgkn+Yduo5lcvtTDvrUvAJIv1yuNolHoODTdNw3hdAMg9/3CtuE7lZ3KMa4DTqBAB0uIufM9QjlOqIEm8SuJRqiC0/55bSmXsvK64RvIHkuNZwBqHRNrC8gqOszwyDDuLqnFoJOXTry/Q81A0pYbDCT1nZWQ8g3EoFjary2RMzB/fRX8PUcGi54HdJNrAQGiNuy43kadbEc0jFyps7xTW0nE2aGkn0ErIYMOAlt9udlN8dZi35Qoud9drbxaT7W9Vm8GXMH+o8s/lPIPQwnSw1JqabP16rTGgDKV6JQqB7QTyIg8HuoMT4Y5m0R+CzOV5w4GXEnrHQc9ytPg6wqQ7jccH2S+IENk6yrY2DwXMTgqj2aflgjoYJM7nsgf8ACuoNe/5gIA/03SXW4meP3K0ed1tFLSDD6kNb73Ptz3QMYZoEPs2L338vYLMZT6dfpaFAVm+L0hZnN87YCADUFRwPhABncmSeAATfopcDk2Ie1rntgusG8g6ajwCeto7WRDK8ow1UufUa5r9RayoDGloixGxkzuOd1qMBhwHHWTLD4ANoLYLi3qZPsivyiGUx5zstMeqRfhS2tI0myyZwdeg35j6ToYQ8xBs6WuEg2MGU+lmFGpUDhVuWkXBEWtE7m5W5w9FxYWvOoGZkbz2KHYz4bpk6mEtuCNiBFjbcWPksuoh4kax1vTTX5PDYieo+lm8H/lBxqO8L4+WNyY5AF4m0lAviHNgKgaIJY2J3AJufyRP4nY7Cva2mWFrmksIHSN9yTJCB0MmeKLXVWzUd4y6Q6XEyZ99kXDUAHd5UP79PLTmSivdDcrOghwdUeD8tsdXH8v3CrnDBs6SdRu48m3P4K/8A4hBIIIIMEEEbLmthJlwEj2K6YkGAEtAAlH/hPGsfTEOBe2Q9pFwehHFue6t13M1wz6t4ifUrMfDmUVKlcmnVFMAeJzLlwkw0jnnyXomWYPC4edUvefqc67nfaAOwXNxfd06sZvTd59aQjUi5zZhZqrmNSkPGIeSRAMkz24CsNx+JMObSDeC59ha/57bqzXyWpWruqUy0NEaS6TpHIDRHTnqtHReBS0ETxe8naUIuYAOPnCIc0rIVsM6tUBqFzy3YRpY2eQD5bopjcI2lSaA2HEXmC4z+ARs4ho0ggD0/YQ3Moc8EuJHE72WJc+2y3DiegqJA1WJoZNUq1iI8M7nbrJWnw+R02EBzY7xv1iVNVxrGmG+J3QXP9k4Ymu7/AONo6Fz5I/6gfmnTh69ZoyaDkl+8a03RLD4RjCNCjq1Xny90zDMxEx4HTxpc0n11H8FYdQfzTcD2uP1Q6nZtfaLcL+0rPfsKoYpw0xve/Va3Jnj5NMB0w39j029F59nmPNN2hrZqv+mR9I21O7fornw9j303NYDIiLrt9kYB1JrnutMDl0EniK2aAvQUlBTxEgJLrJdXo90oBC4xy65xb4hcfzD8x3WSJVrP5t8OteS+mSx/+20rH4x2JoOioSbktJABcOgi3svUjT1CWkEFUsfl7ajSyowOb0In1HQ90hicEys3QB2+EelWLDfRYaj8QPiHU3OB2LCCfYwVYb8R0xBdI6ggyr+M+Gy29Ehw/pfYjyd+o9UHrYVglteiW+Ykeh2Xnq2DrUzLmmN7ZI5a8wuhTqU36FWjntEz44kdD06C8oZWzupVOmnNMdSAXHyGwXG5Phz/AKVYNbuRaPQKeng8OC4AgkDcuvPUevRAaKY4/wDZRYWSw+Lp66oxT/mOkjW7kDgcDyHdWPhTFtdrpm43b6k2/fVQ43Ah7mxvBBtvqJJEcxJUeQ4Y06xLW6gBGxv1juIXWMZLDXrRZLFoMPl2p7jOlrSJHJ54NrWstVl1EuIeHQIs0d+vRVcrwbzLy2Jix3tO/TdEsKyBAj9f1S2PYxlOi0tg3J/UTfkFmk4lz4NrIf8AFJEU+oMD13/+oQ+tUBpkyZjaT9ynfGrapNINEAGXHmTAFvdUKjHiXHTG8DytKScwHbdPYf8AEKv8L4+prLCWwXEwZtdbTF4giHhniEj99V5jTbEPZZ0k7yDfY/uVqspz8vboqQDsQZiezuCj4hha5xbp8jrVDEOhaL/FpEAQZFj35CtVXOF3Xb1aYP2Qj5jSRLQCBsBH9lZq1XOYWiACIjmOYSQLgTJPD/mnzu1VPpARlCgqtouqaiASA5okbaonVFrxGyD4ii14dTBDHgwzT9A7dgZ4XMxpuYSWAm1h0PUlDcvzSqJpvAEnc8mZsUelTLhMrUAaKPMMiqwXPawtAu/WN5EMA31X6cFBXYcCQR9lv8A5lRmkuDmm+mIk8xdPrZLSiWBxAHJH5i6apVQQAbdcJjjaAg1AZvdZP4fZpeSz+bcRG234o/ToOdfnZOw2CZ80MBIJFoAF4n1FkR/wiofpe8HtpH2IhU3AnFHOxwv5zbZpug+qw/ECj4SFFTx1GmAajw3iHO0g/mefdCcZ8QOeS3CUS4bCo6Ws/wCvLvsr3+D0g76A5+5LvG4xzJnqrAwT+GH2T2G7Jptu92by+0tVxTibCFnqOGxhMvxEyfpAAAHIBImPur9PLgRNQk9pN/M8orSyqq7jT3KJ4TJRbUdR7WC6IwlJrszW/XJLGs6IJQLD0Gts1oHYD9Focqy4/U4eQRnC5XTbs0K+1gCajegkqkzBzdVM6xFPD0nVHuPRoG7nHZoHJKuZpmVOgwveY6DknoByVgsxxFSu/wCbVtH+mzhg6nq4/ZGp08xWHGEJfqcXVH/W8y7t0aOwH5nlQF5aQQdlcrpmCwLqroGycsAhI9g81dob5JIhR+HwGi6SXlq3dH6blYaV19AcKJqEtpj3GkdQEsP1NG4/3N/RX6VRrgC0yDsVE1U30XUyX09j9TOD3HQqESor9SiDwqlbBSOo6FWMLi21BaxG7TuPNTELBCtZrFZHQd9VJoPUAKsPhmgbRbyH6LVuaozTHRZDYMq8xWAzH4KdqLqTgZMw4XB89j9lcyT4bqU/qjufyAC2oaENxDqjDO/4e3CVqmnh/wCwMPpsHl9eqYa+pVGQu5qDM3tY0M2mDPYcIfhnNInV4eD1734UeeVy92lv1RETuDNwpMup6KTWuEw3c8j8l5rGVf5GJc7YLCx2ajmn6LO7pDeqfxAzUCZ3Ej0Ql1E/L1A3iDzINvwUPxHiSSANyYEdJvP75UpdLOfRCknxxvTlJpAhZP5BaAf6pI6blWcHh36vBLi4EaReTFpm0d0Rp0ZbUa4yGuLgezrxPnKIYA/LDBQvWcJIMdLnqAuifE8zoPlKuJFhqpcLh6waGlrQ5v1Xu0+vCIOwjoBB8QMFu4A6yqNX4Zq1JqVMVFQxAb4QOxg3VfF4+rhaX+bqLoLQ4N+qOLcpGpTkwLg6Rr9daIrahNkUruDW+KCfL92VV2WitRLadTSS6fF4oM7dh+EoRhc7/iGAlhadpO1t5PBV7KsO65+ZF9uSO3dD/spOvaOrIkBwnam4LLa2HABbIB+oEEb79QizsUWm1xzOyZi8dpIABJHEb91HVDXNMmCbkdu4VPbmM+yoE7U5ue0ydTAA9nWP2QRK5n+ahh+bMsc0BrZIiAJmO5WZxOW/LfrB1tmbTsNwY4U9Suys5nQbj8vcJrvHCnlnw6nz289vosCm3PmA660RHLMxcD84eCxn+YHm4PeOUeb8Qu+cynpaQ8tEgkQXWn34QvFYWnphthuQh2Hw7JGpxtNuLbHy2Uo4mrRgMNp02a/O1ZqUqdW7hf8Aa9JbgidyrdCgG7IX8M4zXQEknSS2TzFx9iB6IjicbTpt1OcAF6um8PaHDaJXEe0tcWnYrEoRm+fMpeFvjqHZo/M8BC8fnNWral4Gf1nc/wDEIcyk1m253JuT5lMsp70MlRVw97/mVTqdwP5Wdmjr3VeuVPWqwu5ZgXVn7eEbnqmBYIZuhbsK92zSVoPh3AOp7hajD4NrQBCl+WOiC6rIhaDVG1JSJIS2p0ypTlPC6qUVdpUzSuVKcqIGFaiixWCBOpphw2I3TaWPc21Uf9ht6jhXGuTalIOV+aimY8ESCCOyRahTsM5hlhj8D5hTUsyi1RunuLj+yrLuUlXHNCjqAEcFSgtcLEEdk04cIZCtZTFYMfO1iRH3/sosVjbFsevWVpcZhNQjlA64IsWiR2Xme0MG6k4uZYG/2F1MPWzgA6hZ3NMCHM+Z/SJ7ETf1VGjimtMFtj7D2RfNK5cHAWiI6b9EGqAGZtI/DdJUyJAXQpk5bqmxzjUjZrpJPFiSPsVTyjHGmXOmXuMT1AJ55JsqGcYk6tM2AgH98oh/gToa9rYJ0uI2uII8iuy3CCoxzW8PUdRyS1SpkeC7RaX5ss1azq4bz9lWBFdoJfEbg9Zi/RL4fc4PmoNPi0hsSZvcoV8SB9PEPfMWEgWYRtf0XLZQHeFu0e6MXIyGU6Y0gSCZJGxtyAreDwkjVIibcEeazuXYmq5stplzeLi3vYq2KOKcC0E02ncgjV6RYI7ezq9VwziQdqE+qxoMG60VfDkxEAjZ373QTFsqt+sjcxaJSweGxdOA2traNmvbPu4XVirh69UgVdIby1s+LsSdh5JhvZdVr4Qf5TQEFwmIqfM1tlwFjGxPJHUIpVa1/icNLhcOgg+R6haHL8uY8ABopwOAIXcUKNPwve08QLk9oC6DuymPECZQBjYKBjEuLYj3VfCZY9zi5/hbzNhH6o1SpSZZT0Dg1DJ9GceqttoDdxLz1P5DYKYXsYsOas6b6D5WauPBtTEcVJhMY5tMU6TQAP5o0j+/mo30pOp5L3d9h5BPfXVOviV2wwDRc4nepK1ZUX1STDQSeyIYDKX1TLpDfutPgsup0x4WievKovDbKASs1l3w6951VfCOnJ81qcNh20xDRAU5TShOcXLQAC7qXCU0lcJWVaUpJspKKK0kuLqpRdTXsldXVFFAQQnNepSJUb6atRPlV6uFB2Tg5PD1FEKfhi0y0lp7beykZmVRv1NDx1bY+yJkgqpXwYO1lqQdVSbTzai7+fSejrfdSV8KyoJse4QvE4M8tke6pfwgBlpcw/7SQrNJrlA4hFxktPp9gvO/iNgpVn0xsHQOvBWzZVrt2rE/8gD91k/i7A1KlT5kt1Agu7iINvZcvtLCyxrgNDsGyD9BdHs+tFQhx1H7WXxdBu7jfraB5L0DLC6tRpVNES1vrAjV5FYrC5Q+o+IIHJ/TqV6LhcfUpMYxuHsxoaPGNhYLeAw74L9h9Pdax9ZlmjUfpZrPMrqYdxquJNLVqLheJ4d0jqrGW4B9Yl+gkbiR181oKuc1jI/h236uCqsx2KH0sps9T+RRWdlsbX74a7ptKXdjXGnkPPgi2CypjWgFgnuNlO7A0hctagL62Kd9VcN/4tUZy/V/qVHv83W9k93O8pTOjFbMsLStqb5NufshVfMNZ/yqB/5P8I9uU+lhmM+loHeL+6e5621jQsklUnUKrvrqQP6WeEe+5T6OHYz6Wgd9z7lPqVlBUeehRVlTPrqvUxKbSoucieFy4dFkuAV3Q6hQq1TDWnz4WgyzIWs8T7u/BFMJTDRACnJQHVCVoNCa1gC6UpXChrS4U0rpXFFFG5NLlI5RwoouyknJKKKykkkookkkkqUXUpSSUUXHMBUbqSSSsKKMkhdD0klFF2VG+k07hdSVqKvUy8HYqniMrncA9+fdJJaa4qoVYYTRs0BRuqJJIoMrK4aiYaqSS0qTPnJhrJJK1EmknZWaOXuO5hJJYc4hRX8NlzRxJ7q67LxCSSCSVsBQjAwr9KiAFxJZJVqUBJJJRRIppSSUUTSUwlJJRRcK4kkoqToSSSUUX//Z",
    info: "Misto di verdure fritto",
  },
];

const center = document.querySelector(".menu-center");
const container = document.querySelector(".menu_btn");

//caricare oggetti al caricamento della pagina
window.addEventListener("DOMContentLoaded", () => {
  displayMenu(items);
  const categories = items.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map((category) => {
      return `<button class="btn" data-id="${category}">${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtns;
  const btns = document.querySelectorAll(".btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      //creo un evento che legge il dataset html
      const event = e.currentTarget.dataset.id;

      //filtro all'interno della lista la categoria e la collego con l'evento che ho creato con il dataset
      const menuCategory = items.filter((menuItem) => {
        //console.log(menuItem.event);
        if (menuItem.category === event) {
          return menuItem;
        }
      });
      if (event === "all") {
        displayMenu(items);
      } else {
        displayMenu(menuCategory);
      }
      console.log(menuCategory);

      //menuCategory= menuCategory.join('')

      //center.innerHTML = menuCategory;
    });
  });
});

function displayMenu(
  itemMenu /*per poter mostrare gli oggetti per categoria*/
) {
  //mappo l'intero oggetto

  let displayMenu = itemMenu.map((item) => {
    //ritorno un oggetto con interpolazione di stringa

    return `<article class="menu_item">
    <img src="${item.img}" alt="" class="menu_img" />
    <div class="menu_info">
    <header>
    <h4 class="menu_info-title">${item.title}
    <strong class="menu_info-price">$${item.price}</strong>
    </h4>
    </header>
    <p class="menu_text">${item.info}</p>
    </div>
    </article>`;
  });

  //ritorna una stringa unica dalla concatenazione di tutti gli elementi dell'array

  displayMenu = displayMenu.join("");

  //sostituisce il contenuto di div menu-center

  center.innerHTML = displayMenu;
}

//filtrare oggetti dalla categoria

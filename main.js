const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

function showWarningToast() {
    toast({
        notifi: 'Cảnh Báo!',
        message: 'Đang lỗi hệ thống, xin vui lòng đợi thêm giây lát',
        type: 'warning',
        duration: 3000
    })
}

//toast function
function toast({ notifi = '', message = '', type = 'info', duration = 3000 }) {
    const main = $('#toasts')
    const icons = {
        success: 'fa-solid fa-circle-check',
        info: 'fa-solid fa-circle-info',
        warning: 'fa-solid fa-circle-exclamation',
        error: 'fa-solid fa-circle-exclamation',
    }
    if (main) {



        const toast = document.createElement('div')

        const autoRemove = setTimeout(() => {
            main.removeChild(toast)
        }, duration + 250)

        toast.onclick = (e) => {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemove)
            }
        }

        const newduration = (duration / 1000).toFixed(2)
        const icon = icons[type]

        toast.classList.add('toast', `toast--${type}`)
        toast.style.animation = `slideInLeft ease 1s, slideOutLeft linear 0.25s ${newduration}s forwards`
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__content">
                <div class="toast__content__notifi">${notifi}</div>
                <div class="toast__content__title">${message}</div>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `

        main.appendChild(toast)


    }

}

function showSuccessToast() {
    toast({
        notifi: 'Thành Công',
        message: 'Bạn đã đăng nhập thành công.',
        type: 'success',
        duration: 3000
    })
}

function showErrorToast() {
    toast({
        notifi: 'Thất Bại',
        message: 'Bạn đã đăng nhập Thất Bại',
        type: 'error',
        duration: 3000
    })
}

function showInfoToast() {
    toast({
        notifi: 'info',
        message: 'Dương Hồng Phúc',
        type: 'info',
        duration: 3000
    })
}



function heart({ type = 'heart', duration = 3000, img = '', img2 = '' }) {

    //đặt gọi id toasts
    const main = $('#toasts')

    //1 obj để truyền heart vào để lấy dữ liệu
    const icons = {
        heart: 'fa-solid fa-heart'
    }

    const imgs = [
        {
            img: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/84331685_188730658880460_7965537138475270144_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=076_GxfJqr8AX9UaOH1&_nc_ht=scontent.fhan2-3.fna&oh=00_AT8mrspRJZiSpWJrJPVkcmWNHa_YYABcM3lJG_HGfsfIug&oe=62B773E1',
        },
        {
            img: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/142579602_416155412804649_317930653666423169_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9gqm9SRj0kkAX_rz6Yu&_nc_ht=scontent.fhan2-3.fna&oh=00_AT-9LQ-aiQtlxVpW829fYq3jtXIyNtVGT45kn-NaIu1twQ&oe=62B89474',
        },
    ]
    //nếu có cái id = toasts thì thực hiện
    if (main) {

        const toast = document.createElement('div')
        //trả lại cái thời gian delay mới để gán vào animation của class = toast

        //gán lại css animation cho class='toast'

        //tự động gỡ sau...
        const autoRemove = setTimeout(() => {

            //gỡ toàn bộ thẻ con của main( nó là #toasts)
            main.removeChild(toast)

        }, duration + 250)

        //click vào nút tắt
        toast.onclick = (e) => {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemove)

            }
        }


        const icon = icons[type]
        newduration = (duration / 1000).toFixed(2)

        toast.style.animation = `slideInLeft ease 1s, slideOutLeft linear 0.25s ${newduration}s forwards`
        toast.classList.add('toast', 'toast--heart', `toast--${type}`,)


        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <img class="toast__img" src="${img}" alt="">
            <img class="toast__img" src="${img2}" alt="">
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `

        main.appendChild(toast)
    }
}


function No() {
    heart({
        type: 'heart',
        duration: 3000,
        img: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/84331685_188730658880460_7965537138475270144_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=076_GxfJqr8AX9UaOH1&_nc_ht=scontent.fhan2-3.fna&oh=00_AT8mrspRJZiSpWJrJPVkcmWNHa_YYABcM3lJG_HGfsfIug&oe=62B773E1',
        img2: 'https://scontent.fhan2-3.fna.fbcdn.net/v/t1.6435-9/142579602_416155412804649_317930653666423169_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=9gqm9SRj0kkAX_rz6Yu&_nc_ht=scontent.fhan2-3.fna&oh=00_AT-9LQ-aiQtlxVpW829fYq3jtXIyNtVGT45kn-NaIu1twQ&oe=62B89474'
    })

}



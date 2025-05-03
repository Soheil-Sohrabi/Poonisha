document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    // اضافه کردن رویداد کلیک به هر لینک
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            // جلوگیری از رفرش صفحه
            event.preventDefault();

            // حذف کردن کلاس "active" از تمام لینک‌ها
            navLinks.forEach(link => link.classList.remove('active'));

            // اضافه کردن کلاس "active" به لینک کلیک شده
            this.classList.add('active');

            // نمایش محتوای مربوط به لینک کلیک شده
            showContent(this.getAttribute('href').substring(1), event); // استفاده از substring برای حذف # از href
        });
    });
});


function showContent(contentId, event) {
    event.preventDefault(); // جلوگیری از رفرش صفحه

    // مخفی کردن تمام گالری‌ها
    var galleries = document.querySelectorAll('.image-gallery');
    galleries.forEach(function (gallery) {
        gallery.classList.remove('active'); // حذف کلاس active برای مخفی کردن گالری‌ها
    });

    // نمایش گالری مربوطه
    var activeGallery = document.getElementById(contentId);
    if (activeGallery) {
        activeGallery.classList.add('active'); // افزودن کلاس active برای نمایش گالری
    }
}

window.onload = function () {
    // نمایش محتوای پیش‌فرض
    showContent('best', event); // نمایش گالری با id = "best"
    document.querySelector('.nav-link[href="#best"]').classList.add('active'); // اضافه کردن کلاس active به لینک پیش‌فرض
};

function scrollToLastItem() {
    const allList = document.getElementById("all-list");
    const lastItem = allList.lastElementChild;
    if (lastItem) {
        lastItem.scrollIntoView({ behavior: "smooth" });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // انتخاب لینک کسب‌وکار
    const businessLink = document.querySelector('.nav-link[href="#work"]');

    businessLink.addEventListener('click', function (event) {
        event.preventDefault(); // جلوگیری از رفتار پیش‌فرض

        // گرفتن آخرین آیتم در لیست
        const allList = document.getElementById("all-list");
        const lastItem = allList.lastElementChild;

        // اسکرول به آخرین آیتم
        if (lastItem) {
            lastItem.scrollIntoView({ behavior: "smooth" });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // انتخاب لینک توسعه نرم‌افزار و آی‌تی
    const itLink = document.querySelector('.nav-link[href="#IT"]');

    itLink.addEventListener('click', function (event) {
        event.preventDefault(); // جلوگیری از رفتار پیش‌فرض

        // گرفتن اولین آیتم در لیست
        const allList = document.getElementById("all-list");
        const firstItem = allList.firstElementChild;

        // اسکرول به اولین آیتم
        if (firstItem) {
            firstItem.scrollIntoView({ behavior: "smooth" });
        }
    });
});

function scrollToSecondItem() {
    const allList = document.getElementById("all-list");
    const secondItem = allList.children[0];
    if (secondItem) {
        secondItem.scrollIntoView({ behavior: "smooth" });
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.header-middle input');
    const resetButton = document.querySelector('.header-middle .fa-x');

    // هنگامی که ورودی تغییر می‌کند
    searchInput.addEventListener('input', () => {
        if (searchInput.value.trim() !== "") {
            resetButton.classList.add('show');  // نمایش دکمه X
        } else {
            resetButton.classList.remove('show');  // پنهان کردن دکمه X
        }
    });

    // هنگامی که دکمه "X" کلیک می‌شود، ورودی پاک می‌شود
    resetButton.addEventListener('click', () => {
        searchInput.value = '';  // پاک کردن ورودی
        resetButton.classList.remove('show');  // پنهان کردن دکمه X
    });

    form.addEventListener('click', (event) => {
        event.stopPropagation();
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        } else {
            menu.classList.add('show');
        }
    });

    // بسته شدن منو زمانی که کلیک خارج از فرم صورت گیرد
    document.addEventListener('click', (event) => {
        if (!form.contains(event.target) && menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    });
});




document.addEventListener('DOMContentLoaded', () => {
    // انتخاب لینک‌ها و دکمه‌ها
    const navLinks = document.querySelectorAll('.nav-link');
    const searchInput = document.querySelector('.header-middle input');
    const resetButton = document.querySelector('.header-middle .fa-x');
    const menu = document.querySelector('.menu');
    const form = document.querySelector('.header-middle');

    // اضافه کردن رویداد کلیک به لینک‌ها برای فعال کردن کلاس active
    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // جلوگیری از رفرش صفحه

            // حذف کردن کلاس "active" از تمام لینک‌ها
            navLinks.forEach(link => link.classList.remove('active'));

            // اضافه کردن کلاس "active" به لینک کلیک شده
            this.classList.add('active');

            // نمایش محتوای مربوط به لینک کلیک شده
            showContent(this.getAttribute('href').substring(1), event);
        });
    });

    // تعریف تابع showContent برای نمایش محتوای مربوطه
    function showContent(contentId, event) {
        event.preventDefault();
        const galleries = document.querySelectorAll('.image-gallery');
        galleries.forEach(gallery => gallery.classList.remove('active'));

        const activeGallery = document.getElementById(contentId);
        if (activeGallery) {
            activeGallery.classList.add('active');
        }
    }

    // نمایش محتوای پیش‌فرض
    window.onload = function () {
        showContent('best', event); // نمایش گالری با id = "best"
        document.querySelector('.nav-link[href="#best"]').classList.add('active');
    };

    // اسکرول به آخرین آیتم
    document.querySelector('.nav-link[href="#work"]').addEventListener('click', function (event) {
        event.preventDefault();
        const lastItem = document.getElementById("all-list").lastElementChild;
        if (lastItem) lastItem.scrollIntoView({ behavior: "smooth" });
    });

    // اسکرول به اولین آیتم
    document.querySelector('.nav-link[href="#IT"]').addEventListener('click', function (event) {
        event.preventDefault();
        const firstItem = document.getElementById("all-list").firstElementChild;
        if (firstItem) firstItem.scrollIntoView({ behavior: "smooth" });
    });

    // اسکرول به دومین آیتم
    function scrollToSecondItem() {
        const secondItem = document.getElementById("all-list").children[0];
        if (secondItem) secondItem.scrollIntoView({ behavior: "smooth" });
    }

    // نمایش دکمه X در صورتی که در ورودی چیزی تایپ شده باشد
    searchInput.addEventListener('input', () => {
        if (searchInput.value.trim() !== "") {
            resetButton.classList.add('show');
        } else {
            resetButton.classList.remove('show');
        }
    });

    // پاک کردن ورودی هنگام کلیک روی دکمه X
    resetButton.addEventListener('click', () => {
        searchInput.value = '';
        resetButton.classList.remove('show');
    });

    // افزودن رویداد کلیک برای نمایش/مخفی کردن منو
    form.addEventListener('click', (event) => {
        event.stopPropagation();
        if (menu.classList.contains('show')) {
            menu.classList.remove('show');
        } else {
            menu.classList.add('show');
        }
    });

    // بسته شدن منو زمانی که کلیک خارج از فرم صورت گیرد
    document.addEventListener('click', (event) => {
        if (!form.contains(event.target) && menu.classList.contains('show')) {
            menu.classList.remove('show');
        }
    });
});

<template>
    <nav class="navbar navbar-expand-lg navbar-light mt-md-3 mb-3 mb-md-5">
        <div class="container">
            <RouterLink to="/" class="navbar-brand text-white fw-bold fs-4">Zan</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
                    <li class="nav-item">
                        <RouterLink to="/about" class="nav-link text-white hover-underline">About</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/achievement" class="nav-link text-white hover-underline">Achievements
                        </RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/project" class="nav-link text-white hover-underline">Experience</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink to="/project" class="nav-link text-white hover-underline">Projects</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .navbar-toggler-icon {
        background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
    }
</style>

<template>
  <aside class="hidden xl:block w-64 max-h-screen overflow-auto fixed top-0 pt-12 bg-white z-20">
    <section class="py-2 border-b">
      <ul>
        <li>
          <a href="#"
            class="flex items-center px-6 py-2 text-sm font-medium text-gray-800 bg-gray-200 hover:bg-gray-300">
            <SvgSprite fill="currentColor" class="w-6 h-6 mr-6 text-red-500" symbol="home" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <SvgSprite fill="currentColor" class="w-6 h-6 mr-6" symbol="trending" />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <SvgSprite fill="currentColor" class="w-6 h-6 mr-6" symbol="subscription" />
            <span>Subscriptions</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <SvgSprite fill="currentColor" class="w-6 h-6 mr-6" symbol="library" />
            <span>Library</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <SvgSprite fill="currentColor" class="w-6 h-6 mr-6" symbol="history" />
            <span>History</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="px-8 py-4 font-medium leading-5 border-b">
      <span class="text-sm">
        Sign in to like videos, comment, and subscribe.
      </span>
      <button
        class="focus:outline-none flex items-center px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm">
        <SvgSprite fill="currentColor" class="mr-2 w-7 h-7" symbol="signin" />
        Sign In
      </button>
    </section>
    <section class="py-2 border-b">
      <div class="uppercase text-sm font-semibold px-6 py-2">
        Best of YouTube
      </div>
      <ul>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <div class="p-1 mr-6 bg-gray-700 rounded-full">
              <SvgSprite fill="currentColor" class="w-4 h-4 text-white" symbol="music" />
            </div>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <div class="p-1 mr-6 bg-gray-700 rounded-full">
              <SvgSprite fill="currentColor" class="w-4 h-4 text-white" symbol="sports" />
            </div>
            <span>Sports</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <div class="p-1 mr-6 bg-gray-700 rounded-full">
              <SvgSprite fill="currentColor" class="w-4 h-4 text-white" symbol="gaming" />
            </div>
            <span>Gaming</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <div class="p-1 mr-6 bg-gray-700 rounded-full">
              <SvgSprite fill="currentColor" class="w-4 h-4 text-white" symbol="movies" />
            </div>
            <span>Movies</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <div class="p-1 mr-6 bg-gray-700 rounded-full">
              <SvgSprite fill="currentColor" class="w-4 h-4 text-white" symbol="news" />
            </div>
            <span>News</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <div class="p-1 mr-6 bg-gray-700 rounded-full">
              <SvgSprite fill="currentColor" class="w-4 h-4 text-white" symbol="live" />
            </div>
            <span>Live</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <div class="p-1 mr-6 bg-gray-700 rounded-full">
              <SvgSprite fill="currentColor" class="w-4 h-4 text-white" symbol="video" />
            </div>
            <span>360&deg; Video</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <SvgSprite fill="currentColor" class="w-6 h-6 mr-6" symbol="channels" />
            <span>Browse channels</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="py-2 border-b">
      <div class="uppercase text-sm font-semibold px-6 py-2">
        More from YouTube
      </div>
      <ul>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <SvgSprite fill="currentColor" class="w-6 h-6 mr-6" symbol="premium" />
            <span>YouTube Premium</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <SvgSprite fill="currentColor" class="w-6 h-6 mr-6" symbol="live" />
            <span>Live</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="py-2 border-b">
      <ul>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <SvgSprite fill="currentColor" class="w-6 h-6 mr-6" symbol="settings" />
            <span>Settings</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <SvgSprite fill="currentColor" class="w-6 h-6 mr-6" symbol="history" />
            <span>Report history</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <SvgSprite fill="currentColor" class="w-6 h-6 mr-6" symbol="help" />
            <span>Help</span>
          </a>
        </li>
        <li>
          <a href="#" class="flex items-center px-6 py-2 text-sm hover:bg-gray-100">
            <SvgSprite fill="currentColor" class="w-6 h-6 mr-6" symbol="feedback" />
            <span>Send feedback</span>
          </a>
        </li>
      </ul>
    </section>
    <section class="px-6 py-4 text-xs font-semibold space-y-4">
      <div>
        <a href="#" class="mr-2">About</a>
        <a href="#" class="mr-2">Press</a>
        <a href="#" class="mr-2">Copyright</a>
        <a href="#" class="mr-2">Contact us</a>
        <a href="#" class="mr-2">Creators</a>
        <a href="#" class="mr-2">Advertise</a>
        <a href="#" class="mr-2">Developers</a>
      </div>
      <div>
        <a href="#" class="mr-2">Terms</a>
        <a href="#" class="mr-2">Privacy</a>
        <a href="#" class="mr-2">Policy & Safety</a>
        <a href="#" class="mr-2">How YouTube works</a>
        <a href="#" class="mr-2">Test new features</a>
      </div>
      <div class="font-normal text-gray-500">&copy; 2021 Google LLC</div>
    </section>
  </aside>
</template>

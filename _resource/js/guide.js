(function () {
  window.$docsify = window.$docsify || {};
  window.$docsify.plugins = [].concat(function (hook, vm) {
    hook.afterEach(function (html, next) {
      // 生成目录 HTML
      var tocHtml = generateToc(html);

      // 创建一个临时的 DOM 元素来插入生成的目录
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = html;

      // 找到 <main> 元素
      var mainElement = document.querySelector('main');

      if (mainElement) {
        // 找到最后一个 <section> 元素
        var lastSection = mainElement.querySelector('section:last-of-type');

        if (lastSection) {
          // 将生成的目录插入到最后一个 <section> 元素之后
          lastSection.insertAdjacentHTML('afterend', tocHtml);
        } else {
          // 如果没有 <section> 元素，将目录添加到 <main> 的末尾
          mainElement.insertAdjacentHTML('beforeend', tocHtml);
        }
      }

      // 将更新后的 HTML 返回给 Docsify
      next(tempDiv.innerHTML);
    });

    function generateToc(content) {
      var toc = '';
      var headings = content.match(/<h([1-3])[^>]*>(.*?)<\/h[1-3]>/g);
      if (headings) {
        toc += '<aside id="toc">';
        headings.forEach(function (heading) {
          var level = heading.match(/<h([1-3])/)[1];
          var title = heading.replace(/<\/?h[1-3][^>]*>/g, '');
          var id = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
          toc += '<li style="margin-left:' + (level - 1) * 20 + 'px;"><a href="#' + id + '">' + title + '</a></li>';
        });
        toc += '</ul></aside>';
      }
      return toc;
    }
  });
})();

document.addEventListener('DOMContentLoaded', function() {
  function updateTocVisibility() {
    var toc = document.getElementById('toc');
    var content = document.querySelector('.markdown-section');

    if (!toc || !content) {
      console.warn('Elements not found');
      return;
    }

    var tocRect = toc.getBoundingClientRect();
    var contentRect = content.getBoundingClientRect();

    if (tocRect.left < contentRect.right) {
      toc.style.opacity = '0'; // 隐藏导航栏
      toc.style.visibility = 'hidden'; // 隐藏导航栏
    } else {
      toc.style.opacity = '1'; // 显示导航栏
      toc.style.visibility = 'visible'; // 显示导航栏
    }
  }

  updateTocVisibility();

  // Initial check on page load
  document.addEventListener('DOMContentLoaded', updateTocVisibility);

  // Also consider handling scroll events if needed
  document.addEventListener('scroll', updateTocVisibility);

  // Example of handling dynamic updates, such as on window resize
  window.addEventListener('resize', updateTocVisibility);
});
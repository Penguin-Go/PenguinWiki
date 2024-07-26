# 配置Proxy SwitchyOmega

## 为什么要配置Proxy SwitchyOmega？

因为懒得频繁手动开关Clash等软件的 `系统代理` 按钮，或者不希望宝贵的流量用于国内网站，希望能够自动化地实现：访问国外网站走代理、访问国内网站走直连。

> 一般来说，有些机场中会内置一些分流规则，如果机场自带的分流规则写得很好（其实这个规则也可以自己写，但这是一个新的坑了）使用Proxy SwitchyOmega是不必要的。

> 由于Proxy SwitchyOmega是一个浏览器插件，所以它只能解决自动切换访问**网站**时是否走代理的问题，不能解决其它应用内的流量转发。为了让其它应用内的流量走代理，通常可以采用两种方式：
> 1. 在应用内设置代理服务器和端口，如 [Zotero配置代理](03_Zotero/02_配置代理.md)、[代理系统流量(2)](04_代理系统流量.md#解决方案2：在各个应用中单独配置代理) 等
> 2. 使用Clash代理全局流量（见 [代理系统流量(1)](04_代理系统流量.md#解决方案1：使用Clash的TUN模式代理全局流量)）

## 怎么配置Proxy SwitchyOmega？

### Step1：安装Proxy SwitchyOmega

如果你是Chrome用户，请先打开“系统代理”，然后访问[这个链接](https://chromewebstore.google.com/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif)安装插件。

如果你是Edge用户，请直接访问[这个链接](https://microsoftedge.microsoft.com/addons/detail/proxy-switchyomega/fdbloeknjpnloaggplaobopplkdhnikc)安装插件。

### Step2：配置proxy

- 代理协议：`HTTP`（默认）
- 代理服务器：`127.0.0.1`（表示本机）
- 代理端口：默认为 `7890`（如果修改过Clash中的端口，请如图填写修改后的端口）

![](_assets/Pasted%20image%2020240724170545.png)

### Step3：配置auto switch

如图，切换到 `auto switch` 界面，点击 `添加规则列表`

![](_assets/Pasted%20image%2020240724170639.png)

如图，选择 `AutoProxy`，填入下面这个规则网址，保存选项并更新规则：

`https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt`

![](_assets/Pasted%20image%2020240724171029.png)

如图，将 `情景模式` 改为 `proxy` 并保存

![](_assets/Pasted%20image%2020240724170125.png)

确认一下是否选择了刚才设置的auto switch就ok了

![](_assets/Pasted%20image%2020240724170132.png)

## 一些实用技巧

如果访问某个网站时加载很慢，可以进行以下操作：

### Step1：查看当前连接状态

鼠标悬浮在Proxy SwitchyOmega的图标上，等待信息显示：

如果是直连，看到的像这样↓

![](_assets/Pasted%20image%2020240724174142.png)

如果是代理，看到的像这样↓

![](_assets/Pasted%20image%2020240724174305.png)

如果当前已经是代理模式，网页仍然加载很慢，请检查节点的延时或电脑的网速。

如果当前是直连模式，请往下看：

### 临时修改

如果不确定网页加载慢或无法加载是否由直连引起，可以先临时修改，具体方法是点击Proxy SwitchyOmega图标，点击网站域名，在弹出的下拉框中点击proxy。

![](_assets/Pasted%20image%2020240724174752.png)

点击后网站会重新加载。

如果此时加载依然缓慢，请检查节点的延时或电脑的网速。

如果此时加载正常，请继续往下看。

### 永久修改

如果需要将该域名永久加入规则，首先点击 `添加条件`：

![](_assets/Pasted%20image%2020240724175034.png)

然后设置条件和情景模式（一般不需要进行修改），点击 `添加条件` 即可

![](_assets/Pasted%20image%2020240724175052.png)

这样下次打开该网站的时候就会走代理了！

## 附录：迁移Proxy SwitchyOmega的自定义规则

### Method 1：使用Chrome自动备份（Chrome已登录Google帐号）

![](_assets/Pasted%20image%2020240724175519.png)

### Method2：使用导出/导入功能

![](_assets/Pasted%20image%2020240724175529.png)
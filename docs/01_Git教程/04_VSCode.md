## 1. 管理仓库
点击左边的git标签即可打开Git管理GUI

![vscode_clone](_assets/vscode_clone.png)

### 1.1 新建仓库

1. 在服务器端新建仓库
2. 在服务器端复制仓库HTTP地址

![Github_copy_HTTPS](_assets/Github_copy_HTTPS.png)

3. 克隆到本地

点击git远程仓库之后选择保存在本地的地址

![vscode_clone2](_assets/vscode_clone2.png)

等待clone...

![vscode_clone3](_assets/vscode_clone3.png)

clone完成后打开：

![vscode_clone4](_assets/vscode_clone4.png)


## 2. 本地工作区保存至git
### 2.1 commit

![vscode_push](_assets/vscode_push.png)

不同修改类型的标注如下：

![](_assets/vscode_modify_type.png)

在commit前可以比较文件的diff
（这是另一个例子↓）

![](_assets/vscode_compare.png)

## 3. 本地分支与远程服务器分支的交互
### 3.1 git push

![vscode_push2](_assets/vscode_push2.png)


### 3.2 git pull

选择分支：
![](_assets/vscode_pull_branch.png)

然后这个分支就在本地了
![](_assets/vscode_pull_branch2.png)

pull：
![vscode_pull2](_assets/vscode_pull2.png)

![vscode_pull3](_assets/vscode_pull3.png)

### 3.3 切换分支
以下面两个分支为例，可以看到，当切换分支的时候，本地资源管理器能看到的文件也变了。

![](_assets/vscode_switch_branch.png)

![](_assets/vscode_switch_branch2.png)

### 3.4 git merge 合并分支
如果想把new_dev合并入new_branch

1. 选择new_branch分支
2. 选择Merge...

![](_assets/vscode_git_merge.png)

3. 选择new_dev分支

![](_assets/vscode_git_merge2.png)

4. 合并完成

![](_assets/vscode_git_merge3.png)


### 3.4 git merge 合并分支--分支冲突
如果merge的时候发生冲突，会出现这样的东东：

![](_assets/vscode_merge_conflict.png)

根据提示处理冲突之后，重新git add + git commit即可

## 4. 可视化插件：GitGraph

![](_assets/vscode_gitgraph.png)


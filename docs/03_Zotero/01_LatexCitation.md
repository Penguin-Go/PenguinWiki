# Cite in Latex with Zotero

## Latex中的引用逻辑1

1. 参考文献的CitationKey和元数据保存在bib文件中
2. 参考文献的引用格式保存在bst文件中
3. 正文中通过 `\cite{CitationKey}` 进行引用
4. 文末通过 `\bibliographystyle{xxx.bst}` 和 `\bibliography{xxx.bib}` 命令生成参考文献列表

## Zotero + Better BibTex 的功能

1. 自动生成文献的CitationKey
2. 将文献的CitationKey和元数据导出到bib文件中
3. 通过快速复制（`Ctrl+Shift+C` 或直接拖拽）复制或粘贴引用命令/引用信息

## 基础设置
`设置` - `Better BibTex` - `字段` - `不导出的字段`：`abstract,file,note,keywords,month,urldate,annotation,extra`

## 工作流1
- `设置` 
	- `导出` - `条目格式`：Better BibTex Citation Key Quick Copy
	- `Better BibTex`
		- `快速复制`
			- `快速复制格式`：LaTeX引用
			- `LaTeX命令`：cite

## 工作流2
将bbl文件中的 `\bibitem` 条目手动复制到 `thebibliography` 环境中，如下所示：
```latex
\begin{thebibliography}
	\bibitem[{Ardestani-Jaafari and Delage(2016a)}]{ad16a}
	Ardestani-Jaafari, A., E. Delage (2016a)
	Linearized robust counterparts of two-stage robust optimization problems with applications in operations management. Available at: { \url{optimization-online.org/DB_FILE/2016/03/5388.pdf}}.
\end{thebibliography}
```




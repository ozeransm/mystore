import { useLocation } from 'preact-iso';

export function Header() {
	const { url } = useLocation();

	return (
		<header>
			<nav>
				<a href="/" class={url == '/' && 'active'}>
					Home
				</a>
				<a href="/users" class={url == '/users' && 'active'}>
					Users
				</a>
				<a href="/products" class={url == '/products' && 'active'}>
					Products
				</a>
				<a href="/orders" class={url == '/orders' && 'active'}>
					Orders
				</a>
				<a href="/contacts" class={url == '/contacts' && 'active'}>
					Contacts
				</a>
				<a href="/404" class={url == '/404' && 'active'}>
					404
				</a>
			</nav>
		</header>
	);
}

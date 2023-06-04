---
outline: deep
---

# Roles

ZForum will expect at least 2 roles to exist, being ID 1 for the default user type, and 2 for the restricted user type. You can generate these roles by 
running `php artisan zforum:make-default-roles`. You can also run it with the option `--all` to generate all default roles, which is recommended.

## Default Roles

These are the default roles that get created when you run `php artisan zforum:make-default-roles`. The ones after the restricted user role all all from using the `--all` option.

### user role

The user role by default can create posts and comments, but not run any moderation actions such as deleting other users posts. Below is a representation of the default user role configuration as a JavaScript object.

```js
{
    id: 1,
    name: "user",
    can_create_posts: true,
    can_delete_posts: false, // this applies to both posts and comments
    can_update_posts: false, // this as well
    can_create_comments: true,
    can_ban_users: false,
    can_delete_users: false,
    can_send_messages: true, // for future planned messaging feature
    can_report_content: true, // for future planned content reports
    can_view_reports: false,
    can_restrict_users: false // switch user to restricted
}
```

### restricted user role

The restricted user role is for users who have not been verified, by email, or possibly other means. You can configure this role to be the default in the `.env` file.

```js
{
    id: 2,
    name: "restricted user",
    can_create_posts: false,
    can_delete_posts: false,
    can_update_posts: false,
    can_create_comments: true,
    can_ban_users: false,
    can_delete_users: false,
    can_send_messages: false,
    can_report_content: true,
    can_view_reports: false,
    can_restrict_users: false
}
```

### post moderator role

```js
{
    id: 3,
    name: "post moderator",
    can_create_posts: true,
    can_delete_posts: true,
    can_update_posts: false,
    can_create_comments: true,
    can_ban_users: false,
    can_delete_users: false,
    can_send_messages: true,
    can_report_content: true,
    can_view_reports: true,
    can_restrict_users: true
}
```

### trusted moderator role

```js
{
    id: 4,
    name: "trusted moderator",
    can_create_posts: true,
    can_delete_posts: true,
    can_update_posts: false,
    can_create_comments: true,
    can_ban_users: true,
    can_delete_users: false,
    can_send_messages: true,
    can_report_content: true,
    can_view_reports: true,
    can_restrict_users: true
}
```

### super moderator role

It is recommended that you give this role to any user whos admin, as without it, they won't be able to take moderation actions on the frontend, and only on the admin panel. This is intentional.

```js
{
    id: 5,
    name: "super moderator",
    can_create_posts: true,
    can_delete_posts: true,
    can_update_posts: true,
    can_create_comments: true,
    can_ban_users: true,
    can_delete_users: true,
    can_send_messages: true,
    can_report_content: true,
    can_view_reports: true,
    can_restrict_users: true
}
```

## Role configuration from .env file

### Setting the default role on user registration

The default role can be set by changing the `DEFAULT_USER_TYPE` option to a valid Role ID. Keeping it at 2 is recommended if you plan to use email verification, or you could set it to 5 if you want chaos.

(function() {var implementors = {};
implementors["actix_redis"] = [{"text":"impl&lt;S, B&gt; Transform&lt;S&gt; for <a class=\"struct\" href=\"actix_redis/struct.RedisSession.html\" title=\"struct actix_redis::RedisSession\">RedisSession</a> <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: Service&lt;Request = ServiceRequest, Response = ServiceResponse&lt;B&gt;, Error = Error&gt; + 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;S::Future: 'static,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: 'static,&nbsp;</span>","synthetic":false,"types":["actix_redis::session::RedisSession"]}];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()